class User < ApplicationRecord
    validates :email, uniqueness: true
    validates :password, presence: true
    validates :name, presence: true
    validates :typeOfUser, presence: true


    has_secure_password
    has_many :videos, foreign_key: "student_id"
    has_many :reviews
    has_many :messages
    has_many :bookings

    has_many :students, class_name: "User", foreign_key: "teacher_id"
    belongs_to :teacher, foreign_key: 'teacher_id', class_name: 'User', optional: true
    validate :teacher_relationship_exists?

    def is_teacher?
        self.typeOfUser == "teacher"
    end

    def teacher_relationship_exists?
        if !self.is_teacher? && !self.teacher
            errors.add(:teacher, "must exist")
        end
    end

    def my_messages
        if self.is_teacher?
            Message.where(teacher_id: self.id)
        else
            Message.where(student_id: self.id)
        end
    end
    
    def my_bookings
        if self.is_teacher?
            Booking.where(teacher_id: self.id)
        else
            Booking.where(student_id: self.id)
        end
    end

    # def self.generate_students_videos(ids)
    #     videos = []
    #     ids.each do |id|
    #         student = User.find_by(id: id)
    #         videos << student.videos
    #     end
    #     videos
    # end

end
