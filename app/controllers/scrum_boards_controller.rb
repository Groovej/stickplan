class ScrumBoardsController < ApplicationController
 layout 'main_window' 
 http_basic_authenticate_with :name => "new", :password => "new", :except => [:new, :show, :current_board]
  # show all possible ScrumBoards 
  def index
    @scrum_board = ScrumBoard.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @scrum_board }
    end
  end
   
   # Show current ScrumBoard
  def show
      @scrum_board = ScrumBoard.where(["unique_id = ?" , params[:id]])
       if @scrum_board.exists?
         @my_board = @scrum_board.first
                   
          respond_to do |format|
            format.html # show.html.haml
            format.json { render :json => @scrum_board}
           end
     else 
       redirect_to :action => :new
     end
  end
  
  # create new ScrumBoard
  def new
    @scrum_board = ScrumBoard.new
    param = rand(50**7).to_s(36)
    @scrum_board.update_attributes(:unique_id => param)
    if @scrum_board.save(:validate => false)
      respond_to do |format|
        format.html { redirect_to scrum_board_path(:id => param) }
        format.json { render json: @scrum_board }
      end
    else 
      render :text => "Error #{@scrum_board.errors.inspect}"
    end
    
  end
  
  
  #current board with out entered name
  def current_board
    @scrum_board = ScrumBoard.where(["unique_id =?", params[:un_id]])
      if @scrum_board.exists?
          @scrum_board = @scrum_board.first
          variable = @scrum_board.stickers
          @stickers_todo = @scrum_board.stickers.find(:all, :conditions => {:sticker_status => :to_do})
          @stickers_in_progress = @scrum_board.stickers.find(:all, :conditions => {:sticker_status => :in_progress})
          @stickers_done = @scrum_board.stickers.find(:all, :conditions => {:sticker_status => :done})
        respond_to do |format|
        format.html #current_bord.html
        format.json {render :json => variable}
        end
      else
        redirect_to :action => :new
      end
  end   
  
  
  #edit ScrumBoard
    def edit
    @scrum_board = ScrumBoard.find(params[:id])
  end 
  
   
  #PUT
  # Update state of ScrumBoard
  def update
    
    @scrum_board = ScrumBoard.find(params[:id])
    
      respond_to do |format|
      if @scrum_board.update_attributes(params[:scrum_board])
        format.html { redirect_to :action => 'current_board', :un_id => "#{@scrum_board.unique_id}"}
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @scrum_board.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE ScrumBoard
  def destroy
    @scrum_board = ScrumBoard.find(params[:id])
    @scrum_board.destroy
    flash[:notice] = "ScrumBoard by name #{@scrum_board.name_of_board} deleted successfully."
    respond_to do |format|
      format.html { redirect_to scrum_boards_url }
      format.json { head :no_content }
    end
  end
  

end