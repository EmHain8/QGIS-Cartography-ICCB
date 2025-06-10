---
layout: default
title: "Part 1: Styling Data"
nav_order: 3
---



## Loading data
Loading data can occur in multiple ways. For this course, we will use the Browser and the Data Source Manager.  

One of the important aspects to an efficient mapping product, is keeping it tidy. A way to do this is to create `Groups` in the `Layers` panel.  
![layer groups](../media/groups.png)  
> - Create the above groups in the layers panel by right mouse clicking in the layer panel and selecting `Add group`.
> ![Add a group](../media/add_group.png)  

### Browser
Accessing the data via the `Browser` panel, we will add the data to the groups. 
> - Ensure you have the `Browser` panel open.  
> ![Browser panel](../media/browser.png)  
> - At the top of the `Browser`, click on the arrow next to `Project Home` to expand it  
> ![project home](../media/Project_home.png)  
> - Expand the Data folder  

We are going to select multiple files and load them under the group headings 
> - First, in the `Layers` panel, click on the group 'Original data'  
> ![Select group](../media/select_group.png)  
> - Then head over to the `Browser` panel and whilst holding down the ctrl key, click on:  
>   - 'current_distribution_RF_1.tif'  
>   - Expand the geopackage and click on all the layers*  
> - With all of these selected, click on the `Add selected layer` button at the top of the `Browser` panel  
> ![Selected layers](../media/add-selected-layers2.png)  
> - This results in layers nested under the 'Original data' group  
> ![group layers](../media/group_layers.png)  
> - Turn off the layers, population_centres and watercourse  

*N.B. The layers in the geopackage have been extracted from the ArcGIS REST Service from the Queensland Government. Refer to [Ref A - Add Data](https://emhain8.github.io./QGIS-Cartography-ICCB/docs/part1a-add-data.html) for step by step instructions for other methods.*   

Nearly there with the data, we just need to add in a basemap.  
> In the `Layers` panel, click on the group 'Base'  
> In the `Browser`, under `XYZ Tiles`, click on 'Qld Imagery'  
> Click on the `Add selected layer` button at the top of the `Browser` panel  

## Styling
Now it is time to style the:  
- Koala distribution: 'current_distribution_RF_1.tif'  
- LGA: local_government_area  
- Mask: seq_boundary  

### AOI Map
First, we are going to create our "AOI" map - our area of interest. For this we will want the following datasets turned on:  
- Mask: seq_boundary  
- LGA: local_government_area  
- Qld Imagery

> - Click on the layer seq_boundary and click on `Duplicate Layer`
> - Move this layer to the sit under the 'Mask' group
> - Rename it to AOI and click on it so it becomes the `Active` layer
> - Right mouse click anywhere in a blank area on the toolbar at the top and select `Panels > Layer Styling Panel`
> ![layer styling panel](../media/layer-styling-panel.png)
> - In the `Layer Styling` panel, select from the drop down `Inverted Polygons'
> - Click on `Simple Fill` and remove the outline and change the colour to white
> ![inverted-polygons](../media/inverted-polygons.png)


