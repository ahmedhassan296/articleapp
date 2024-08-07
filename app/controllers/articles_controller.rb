class ArticlesController < ApplicationController
  def index
    @articles = Article.order(created_at: :desc)
  end

  def main
       
  end

  def default
      
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      respond_to do |format|
        format.html { redirect_to @article, notice: 'Article was successfully created.' }
        format.json { render json: { success: true, redirect_url: article_url(@article) } }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { success: false, errors: @article.errors.full_messages } }
      end
    end
  end


  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      respond_to do |format|
        format.html { redirect_to @article, notice: 'Article was successfully updated.' }
        format.json { render json: { success: true, redirect_url: article_url(@article) } }
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.json { render json: { success: false, errors: @article.errors.full_messages } }
      end
    end
  end

  def destroy 
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to root_path, status: :see_other
  end

  private
    def article_params
      params.require(:article).permit(:title, :body)
    end
end
