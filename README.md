# Progress (Drupal 8 Bootstrap sub theme)

This is a Drupal 8 subtheme that uses Bootstrap theme as the base:  https://www.drupal.org/project/bootstrap

Not a lot has changed in this theme compare to Bootstrap base theme. This theme was created for a better layout and typography for readability. A full screen search is included as well (see below *usage to set this up).

It is built primarily for blogging/journal sites. You can use any Bootswatch (https://bootswatch.com/) skins with this theme. It may also make a good addition to business sites that blogs quite frequently.

##Requirements:
Drupal 8: https://www.drupal.org/project/drupal
Bootstrap base theme: https://www.drupal.org/project/bootstrap

##Installation
- Download base theme: https://www.drupal.org/project/bootstrap (Drupal 8 version, ie 8.x not 7.x)
- Unpack the base theme and upload it to /themes of your Drupal linstallation.
- Download Progress theme. Unpack it and rename 'master' to 'progress'
- Upload it to /themes of your Drupal installation.
- Go to menu --> appearances 
- Find this theme in the list and click on 'Install and set as default'

##Usage:
To get the full screen search to work, follow these steps:
- Once theme is installed, go to menu --> structure --> block layout. Move or assign the default search box to footer region (you can move it anywhere but i think best place to put it is the footer region). Basically, the search will be hidden from the page.
- Go to menu --> structure --> Menus --> click on 'edit menu' for Main navigation.
- Create a new menu item. In the title field type in: Search and in the link field type in: #block-progress-search

To change Bootswatch skins:
- Menu --> Appearances --> click on progress settings link.
- In the settings page, click on 'Advanced' tab. Under 'Theme' dropdown, select a Bootswatch skin you want and click on 'save configuration' button.

Note: some skins have a dark background. This does not work well with progress theme due to font colour issue. If you need to use a theme with a dark background, make sure you remove some font colour stylngs in progress theme (themes/progress/assets/css/style.css). 

