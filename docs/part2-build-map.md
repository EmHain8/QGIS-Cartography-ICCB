---
layout: default
title: "Part 2: Build a Beautiful Map"
nav_order: 4
---

We will cover:

- Adding items
- Setting up font
- Decorations
  - Rounded frames
  - Adding pictures and other items
- Making it uniform
- Legend wrangling
- Data Credits


## Maps, Scale and Position on Page
| ID | Map        | Map Theme | Title | Scale | X  | Y  | Width | Height | Note |
|-----|------------|-----|-------------|--------|-------------|-----|-----|-----|-----|
| 1 | Area of Interest (AOI) | 1 AOI |South-East Queensland | 1:3200000 | 2.596 | 8.795 | 92.638 | 79.841 | Decoration 'shape' |
| 2 | Overall Change (climate downscaled model) - s2 | 2 Overall Change (climate downscaled model) | Overall Change in Temperature (SSP370 ) | 1:24990123 | 188.025 | 25.558 | 68.037 | 73.848 | Use the projection option in the Print Layout to change to 4326 |
| 3 | Climatic suitability for koalas - s3  | 3 Climatic suitability for koalas | Climatic suitability for koalas  | 1:3200000 | 0.000 | 102.906 | 98.000 | 90.000 | n/a |
| 4 | Climatic suitability for koalas - s3  | 4 Projected suitability change (SSP370) | Projected suitability change (SSP370), current to 2090  | 1:3200000 | 99.500 | 102.906 | 98.000 | 90.000 | n/a |
| 5 | Koala priority areas - s4  | 5 Priority areas | Priority areas for conservation  | 1:3200000 | 199.000 | 102.906 | 98.000 | 90.000 | n/a |
| 6 | Koala image  | 6 Koala image | n/a | 1:4517.773 | 255.990 | 0.500 | 48.812 | 83.954 | Decoration 'shape' |

| ID | Map        | Font | Size | Color | X  | Y  | Width | Height | Alignment | Note |
|-----|------------|-----|-------------|--------|-------------|-----|-----|-----|-----|-----|
| 1 | Scale text  | Roboto | 6 | Black | 255.990 | 0.500 | 48.812 | 83.954 | Decoration 'shape' | ----- |
| 2 | Scale bar  | Roboto  | n/a | Black | 255.990 | 0.500 | 48.812 | 83.954 | Decoration 'shape' | ----- |
| 3 | Data credentials  |  Roboto  | n/a | Black | 255.990 | 0.500 | 48.812 | 83.954 | Uses dynamic text | ----- |
| 4 | Problem statement  | Roboto | n/a | Black | 255.990 | 0.500 | 48.812 | 83.954 | Justify | Html |
| 5 | Pink rectangle  |  n/a  | n/a | 1:4517.773 | 0.000 | 17.515 | 297.000 | 85.641 | n/a | Decoration 'shape' |
| 6 | Green rectangle  |  n/a  | n/a | #3b3e29 | 0.000 | 0.000 | 297.000 | 23.300 | n/a | Decoration 'shape' |
| 7 | Main Title  |  Roboto | 21 | White | 95.235 | 9.473 | 160.756 | 8.042 | Centre | Center to the AOI and Koala elements |

**Things to note:**

- The scale is the same for all the maps, except the the Overall Change in Temperature
- We use the `Position and Size` controls to position and make the maps uniform

## The Map Brief
Title: Open Source Geospatial Tools for Conservation under Climate Change - a Koala Case Study
Style: Poster
Include: 

- Study Area
- How will the climate change in SEQ
- How could the distribution of koalas change under this new climate. 
- Where should we focus our efforts to conserve koalas
- Problem statement

### Image of Koala

### Problem statement
The text we want to use is:
Koalas (*Phascolarctos cinereus*) in South East Queensland (SEQ) inhabit fragmented eucalypt woodlands and rely heavily on Eucalyptus species for food and shelter. The population is already under pressure from habitat loss, disease (notably chlamydia), and vehicle collisions. Climate change poses additional threats through increased frequency of heatwaves, droughts, and bushfires, which reduce food quality, water availability, and suitable habitat. This workshop set out to apply open source geospatial tools to better understanding how future climate may impact these populations, and how resources can be best directed towards conserving this iconic species. 

But as we need to itlaicised the scientific name, we need to turn this into HTML text:

```<p> Koalas (<i>Phascolarctos cinereus</i>) in South East Queensland (SEQ) inhabit fragmented eucalypt woodlands and rely heavily on Eucalyptus species for food and shelter. The population is already under pressure from habitat loss, disease (notably chlamydia), and vehicle collisions. </p>
<p>Climate change poses additional threats through increased frequency of heatwaves, droughts, and bushfires, which reduce food quality, water availability, and suitable habitat. </p>
<p>This workshop set out to apply open source geospatial tools to better understanding how future climate may impact these populations, and how resources can be best directed towards conserving this iconic species. </p>
```


## For each map
Scale is: 3200000
Size: 100 x 85
Label: 100 width and centred
Map theme activated

## Scale bar and text
Change font via `Appearance > Font`
