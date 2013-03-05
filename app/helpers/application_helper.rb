module ApplicationHelper
    def title
    def_title = "Scrum board"
    if @title.nil?
      def_title
    else
      "#{def_title} | #{@title}"
    end
  end
end
