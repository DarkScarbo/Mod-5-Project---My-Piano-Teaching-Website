class VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos, include: :review
    end

    def show
        video = Video.find_by(id: params[:id])
        if video
            render json: video, include: :review
        else
            render json: {error: "Video not found."}, status: 404
        end
    end

    def create
        video = Video.new(url: params[:url], title: params[:title], description: params[:description], student_id: params[:student_id])
        if video.save
          render json: video
        else
          render json: {errors: video.errors.full_messages}, status: 400
        end
    end

end
