class StickersController < ApplicationController
 
 
 def index
   @sticker = Sticker.all
   
   respond_to do |format|
     format.html # use index.html.erb
     foramt.json {render :json => @sticker}
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
      flash[:notice] = "Sticker created."
      redirect_to(:action => 'list')
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
  end
  
  def delete
    @sticker = Sticker.find(params[:id])
  end
  
  def destroy
    Sticker.find(params[:id]).destroy
    flash[:notice] = "Sticker destroyed."
    redirect_to(:action => 'list')
  end

end
