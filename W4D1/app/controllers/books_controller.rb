class BooksController < ApplicationController
  def index
    render json: Book.all
  end

  def new
    # your code here
    render :new
  end

  def create
    book = Book.new(book_params)
    if book.save
      
    else
      render json book.errors.full_messages
      render:new
    end
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy
    index
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
