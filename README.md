Stickplan
==

Project description
--

_Stickplan_ is a simple application for organizing Scrum boards. User will be able to crate new Scrum board, 
create stickers inside this Scrum board, change those categories to "todo", "in progress" and "done" and delete individual
stickers. 

Final product should look like this: 
![](http://dl.dropbox.com/u/3459328/stickplan/stickplan_final_product.png)

Goals for interns
--
Your actions in this project can be separated to a several task groups:
- create HAML and SCSS markup based on already created mockups. Also you should create and use WebFonts.
- prepear and use WebFonts (using [FontSquirrel's WebFont Generator](http://www.fontsquirrel.com/tools/webfont-generator)).
- create database structure and all App-related Rails files: routes, modules, controllers.
- create and implement Backbone suite to handle user's interactions inside applications.
- write RSpec tests for Rails's models and controllers. 
- setup and implement Travis CI integration (and place cool green badge in README =))
- publish application at Heroku.com

User case scenarious
--
__Creating new scrum board__: after visiting front page of Application user should be redirected to a new scrum board 
with unique address and ID (just like http://stickplan.heroku.com/2aSdn0). After page loads cursor should be focused on
project's name field:
![](http://dl.dropbox.com/u/3459328/stickplan/new_project-created.png)

After this user should have possibility to create new stickers inside this Scrum board. 

__Working with existing Scrum board__: if user comes directly to already existed Scrum board (visiting Scrum board's 
address) he shoud see all stickers that he already created inside this Scrum board. Also he shoud see Scrum board's title.

__Creating new stickers inside Scrum board__: user can create new stickers inside Scrum board clicking on the stickers 
prototype:

![](http://dl.dropbox.com/u/3459328/stickplan/create-new-prototype.png)

After clicking sticker with no text and randomly selected color of background should appear in "todo" section.
After new sticker appears focus shoud be set to a textarea inside sticker and user should have possibility to enter 
sticker's text. In database we shouuld store sticker's text and background color.

__Edition of already existed stickers__: User can edit sticker's text. To do this he need to doublecklick at sticker. 
After this sticker's text should be replaced by textarea with sticker's text inside. Focus shoud be set inside this 
textarea. After edition new sticker's text should be saved o a database after focus move off the textarea.

__Moving sticker into categories__: Sticker can be moved to another category ("in progress" or "done") with drag and drop.

__Deleting sticker__: Sticker can be removed. For this user must hover sticker and deletion icon should appear:
![](http://dl.dropbox.com/u/3459328/stickplan/deletion_icon.png)

After clicking on deletion icon sticker should be removed from database and from view. 


Topics to research
--
- [HAML](http://haml.info/)
- [SCSS](http://sass-lang.com/)
- [Backbone](backbonejs.org)
- [RSpec-Rails](http://rubydoc.info/gems/rspec-rails/frames)
- [jQuery](jquery.com)
- [jQuery UI library](http://jqueryui.com/)
- CSS3 (gradients, shadows etc.)


Materials and resources for project
--
_PSD files_:
- [stickplan.psd](http://dl.dropbox.com/u/3459328/stickplan/stickplan.psd)
- [stickplan - empty page.psd](http://dl.dropbox.com/u/3459328/stickplan/stickplan%20-%20empty%20page.psd)

_Fonts_:
- [fonts.zip](http://dl.dropbox.com/u/3459328/stickplan/fonts.zip)

_Prepeared images_:
- [stickers-background-sprite.png](http://dl.dropbox.com/u/3459328/stickplan/stickers-background-sprite.png)
- [delete-icon.png](http://dl.dropbox.com/u/3459328/stickplan/delete-icon.png)
