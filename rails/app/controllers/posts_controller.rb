class PostsController < ApplicationController
    protect_from_forgery with: :null_session # APIモードで必要


    # GET /posts
    def index
      posts = Post.all.order(created_date: :desc)  # 新しい順に取得
      render json: posts
    end

    # POST /posts
    def create
        post = Post.new(
            user_id: 1,
            content: params[:content],
            created_date: Time.current
        )

        if post.save
            render json: { message: '保存成功', post: post }, status: :created
        else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
    end
end

