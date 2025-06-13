---
layout: default
title: "Part 1: Styling Data"
nav_order: 3
---

# Styling
We will cover the following:

- Organise your layers to make you efficient
- Replacing datasets
- Choosing your colors for you brand via your own palette
- Creating a mask to focus your views on your data
- Labeling
- Creating a color ramp
- Use a cool basemap
- Create Map themes 

## Create a Palette
We all consume branding everyday and choosing a palette of colors is a part of it. Artists will also look to a set of colors, a palette, to help harmonise their work. So let's create a palette from the Koala picture you have.  

> - In the `Layers` panel, expand the 'Decorations' group  
> - Right mouse click on the 'koala_1.jpeg'and click on `Zoom to layers`  
> - On the top menu, click on `Settings > Options'  
> - In the `Options`, select `Colors` on the left side  
>  ![palette](../media/palette3.png)  
> - Click on the drop down where it says *Standard colors* and select *Project colors*  
> - Click on the green plus button to bring up the `Select color` dialog
> ![palette_sample](../media/palette_sample.png)  
> - Click on the `Sampling`tab  
> - To start collecting the colors for the palette click the `Sample color`button  
> - Let's start with a light grey first, so click the background of the koala image to pick up the grey and click `OK`  
> ![palette_grey](../media/palette_grey.png)
> - **Save your project**  

The grey now appears in the palette. you can change the label it you want. Repeat the above to capture the following:

- Browns from the trunk
- Greens from the leaves
- Greys from the fur and nose
- Pinks from the fur
> ![palette-koala](../media/palette-koala.png)  
> - click `OK`  
> - **Save your project**  

These project colors are now built into this project file. They will appear when you go to the palette option to select colors. 

## AOI Map
First, we are going to create our "AOI" map - our area of interest. For this we will want the following datasets turned on:  

- Mask: seq_boundary  
- LGA: local_government_area  
- Qld Imagery

### Create the Mask

> - Under 'Original data' turn on the layer seq_boundary and zoom to it (right mouse click)
> - Right mouse click on it and select `Duplicate Layer`  
> - Move this layer to the sit under the 'Mask' group  
> - Rename it to AOI (right mouse click > `Rename Layer`) and click on it so it becomes the `Active` layer  
> - Right mouse click anywhere in a blank area on the toolbar at the top and select `Panels > Layer Styling Panel`  
> ![layer styling panel](../media/layer-styling-panel.png)  
> - In the `Layer Styling` panel, select from the drop down `Inverted Polygons'  
> - Click on `Simple Fill` and remove the outline and change the colour to white  
> ![inverted-polygons](../media/inverted-polygons.png)
> - **Save your project**  

This is the mask we want for the 'Island' look for the Grid data, but for the AOI, we want to still see the surrounds so it helps us get our bearings. To do this, we are going to create an additional style for the AOI layer.  

> - Right mouse click on the AOI Layer and click `Styles > Add`. Call this 'AOI'   
> ![Additional styles](../media/styles-add.png)  
> - In the Layers Styling panel, click on the Simple Fill and change it to `Shapeburst Fill`

The `Shapeburst Fill` is a great effect and can also be used for styling water bodies. But we are going to create a transparent mask so we can still see the aerial image under it 
> - For the `Gradient Colours` select the `Colour ramp` option and click in the color bar to bring up our options.  
> ![shapeburst](../media/shapeburst.png)  

We are going to use the greens from our `Project colors` palette  

> - For Color 1, select the darkest green you have  
> - For Color 2, select white  
> - Click ok
> ![color-ramp](../media/color-ramp2.png)  
> - **Save your project**  

Last step for this AOI, we want to make it transparent.  

> - In `Layer Styling`, at the bottom, expand the `Lyaer Rendering` options  
> - Nect to `Opacity` click in the percentage field and make it 66%  
>  ![layer-rendering](../media/layer-rendering.png)  

As you can see here, the QLD Imagery does not extend into the Coral Sea enough, so this is where we may have to replace it with another service. Ensure you have the rights to use it. An easy fix it to set the map property background colour to that of the sea. 

![select-color](../media/select-color.png)

Let's sort out our LGA's now with boundaries and some labels.  

**Boundaries**  

> - Under 'Original data' duplicate 'local_government_area' and move the dupe into the 'Context data' group
> - Rename it 'LGA'
> - In the `Layer Styling`, click on `Simple Fill` and change the outline to a light grey (#d9d9d9)

**Labels**

> - In the `Layer Styling`, click on the label tab  
> ![label-tab](../media/label-tab.png)  
> - Select from the dropdown `Single Labels`  
> - For the value, select 'abbrev_name'  
> - Select the font 'Roboto Black', size 6  
> - For the color, select the same color as the outline - this should be on the palette  
> - Click on the next tab and add in Multiple lines based on spacing  
> - Add a `Text Buffer` of 0.7  
> - Select a dark color form the `Project colors` palette  




