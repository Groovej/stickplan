class ScrumBoardsController < ApplicationController
 layout 'main_window' 
  # show all possible ScrumBoards 
  def index
    @scrum_board = ScrumBoard.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @scrum_board }
    end
  end
   
   def id
    @id
  end
  
  # Show all tickers into ScrumBoard
  def show
    @scrum_board = ScrumBoard.find(params[:id])
    @scrum_size = @scrum_board.stickers.size
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @scrum_board }
    end
  end
  
   # Show all tickers into current ScrumBoard
  def show_me
        @scrum_board = ScrumBoard.where(["unique_id =?", params[:un_id]])
    if @scrum_board.nil?
          @my_board = @scrum_board.first
          variable = @my_board.stickers
          
          respond_to do |format|
            format.html # show_me.html.haml
            format.json { render :json => variable}
           end
     else 
       redirect_to :action => :new
      end
end
  
  # create new ScrumBoard
  def new
    @scrum_board = ScrumBoard.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @scrum_board }
    end
  end
  
  #edit ScrumBoard
    def edit
    @scrum_board = ScrumBoard.find(params[:id])
  end 
  
   #create new ScrumBoard
  def create
    @scrum_board = ScrumBoard.new(params[:scrum_board])
    param = rand(50**7).to_s(36)
    @scrum_board.update_attributes(:unique_id => param)

    respond_to do |format|
      if @scrum_board.save
        format.html { redirect_to @scrum_board }
        format.json { render json: @scrum_board, status: :created, location: @scrum_board }
      else
        format.html { render action: "new" }
        format.json { render json: @scrum_board.errors, status: :unprocessable_entity }
      end
    end
  end

  # Update state of ScrumBoard
  def update
    @scrum_board = ScrumBoard.find(params[:id])

    respond_to do |format|
      if @scrum_board.update_attributes(params[:scrum_board])
        format.html { redirect_to @scrum_board}
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
