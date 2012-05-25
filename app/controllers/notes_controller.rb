class NotesController < ApplicationController\

  def list
    @notes = Note.all
    render :template => "notes/home"
  end

  def index
    @notes = Note.all
    render :json => @notes
  end

  def show

  end

  def create
    if @note = Note.create(params[:note])
      render json: @note, status: :created, location: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def update
    
  end

  def destroy
    
  end
end