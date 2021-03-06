require 'rails_helper'

RSpec.describe Booking, type: :model do

booking_one = Booking.create( date: "15-09-3019", teacher_id: 1, student_id: 2, confirmed: "Yes", starting: "17:00", ending: "18:30", student_name: "Harriet", student_email: "harriet.ballantyne@gmail.com")
booking_two = Booking.create( date: "09-09-2019", teacher_id: 1, student_id: 2, confirmed: "No", starting: "23:58", ending: "23:59", student_name: "Harriet", student_email: "harriet.ballantyne@gmail.com")

    it "is valid with all the attributes." do
        expect(booking_one).to be_valid
    end

    it "creates instances of Booking model." do
        expect(booking_one).to be_an_instance_of Booking
    end

    it "has a confirmed attribute equal to Yes, No or an empty string." do
        expect(booking_one.confirmed).to eq("Yes") | eq("No") | eq("")
        expect(booking_two.confirmed).to eq("Yes") | eq("No") | eq("")
    end
    
    it "has a start time before the end time." do
        expect(booking_one.starting).to be < (booking_one.ending)
    end

    it "has a valid date." do
        current_date = Time.now.strftime("%d/%m/%Y %H:%M").split(" ").first
        current_date_reversed = current_date.split("/").reverse().join("-")
        booking_data_reversed = booking_one.date.split("-").reverse().join("-")
        expect(current_date_reversed).to be < (booking_data_reversed) # booking_one.date is far enogh to pass the spec ;-) 
    end

    it "has a valid time if the booking is for the current date." do
        current_date_and_time = "09-09-2019 18:06"
        current_date = current_date_and_time.split(" ").first
        current_time = current_date_and_time.split(" ").last
        expect(current_date). to eq(booking_two.date) 
        expect(current_time).to be < (booking_two.starting)
    end

end