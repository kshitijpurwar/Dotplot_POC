### This demonstrates how to upload the csv file only and map it's headers with predefined JSON keys which can be fetched from the server
#### Demo screenshots

**Gives error if we upload anything but CSV file**

The program.js file shows how to convert a CSV file to JSON using various options.We can use mappings obatined as options and spawn a new child process in node server for conversion from CSV to JSON which can then further be used as data for visualizations. 
### Shows the working (**see console**) and demo of mapping(index.html)
![screenshot 122](https://cloud.githubusercontent.com/assets/9314776/13998837/4a505ae6-f15f-11e5-9ff8-82bc4ac54851.png)
*Use console to see all the action behind the curtains!* 


### How the reduce.js work
It converts CSV into JSON shown below with help of program.js (converter ) .  
```
id,name,color,region,email,gender
1,Doris,green,aus,work,Male
2,Sara,pink,asia,work,Male
3,Diane,blue,aus,yahoo,Male
4,Maria,red,afr,work,Male
5,Debra,blue,n_america,yahoo,Male
6,Ashley,blue,aus,orgzn,Male
7,Virginia,green,aus,custom,Male
8,Dorothy,white,s_america,custom,Male
9,Martha,green,afr,custom,Male
10,Judith,pink,afr,custom,Female
11,Ruby,pink,aus,orgzn,Female
12,Melissa,yellow,n_america,yahoo,Female
13,Martha,pink,eur,work,Male
14,Evelyn,green,s_america,work,Male
```
**Shows facets and column values**
![screenshot 126](https://cloud.githubusercontent.com/assets/9314776/14003683/6d3be730-f17a-11e5-93c6-9c80e2dfccc6.png)

### How the converter  works see the INPUT and OUTPUT here :
![screenshot 125](https://cloud.githubusercontent.com/assets/9314776/14003861/cb97857c-f17b-11e5-9818-d57e2a5fe4d2.png)


