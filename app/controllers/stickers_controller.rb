class StickersController < ApplicationController
  http_basic_authenticate_with :name => "new", :password => "new", :accept => :save_sticers
 layout 'main_window'
 def index
   @sticker = Sticker.all
   
   respond_to do |format|
     format.html # use index.html.erb
     format.json {render :json => @sticker}
   end
 end
 
 def list
   @sticker = Sticker.order("stickers.id ASC")
  end
 
 def new
    @sticker = Sticker.new
  end
  
  def create
    # Instantiate a new object using form parameters
    @sticker = Sticker.new(params[:sticker])
    # Save the object
    if @sticker.save
      # If save succeeds, redirect to the list action
      flash[:notice] = "Sticker created succesfull"
      redirect_to(:action => 'index')
    else
      # If save fails, redisplay the form so user can fix problems
      render('new')
    end
  end
  
  def edit
    @sticker = Sticker.find(params[:id])
  end

  def show
    @sticker = Sticker.find(params[:id])
     respond_to do |format|
    format.html  # show.html.erb
    format.json  { render :json => @sticker }
  end
  end
  
  # def delete
   # @sticker = Sticker.find(params[:id])
  #end
    
 def update
    @sticker = Sticker.find(params[:id])

    respond_to do |format|
      if @sticker.update_attributes(params[:sticker])
        format.html { redirect_to @sticker, notice: 'Sticker was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @sticker.errors, status: :unprocessable_entity }
      end
    end 
  end
  
  def destroy
     @sticker = Sticker.find(params[:id]) 
     @sticker.destroy
      flash[:notice] = "Sticker destroyed."
    respond_to do |format|
     format.html {redirect_to stickers_url}
     format.json {head :no_content }
     end
  
  end
  
  def save_stickers
     if params.include?(:stickers)
        @stickers = params[:stickers].to_a
        scrum_board_id = @stickers[0][1][2]
        @full_stickers = Sticker.where(:scrum_board_id => scrum_board_id)
        @full_stickers.each{|del_sticker| del_sticker.destroy}
        @stickers.each{|stickers|  @sticker = stickers
        Sticker.create(:sticker_text => @sticker[1][0], :sticker_status => @sticker[1][3], :scrum_board_id => @sticker[1][2], :background_color => @sticker[1][1])
        }
        render :text => "Lets GOOD!!!"
     else
       render :text => "WTF"
     end 
   end

end
