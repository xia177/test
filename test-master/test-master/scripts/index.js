var symptomName = last_month_day();

$(function(){


  init();
  init2();
    $("#el-dialog").addClass("hide");
  $(".close").click(function(event) {
    $("#el-dialog").addClass("hide");
  });

  var date = new Date();
     var numble = date.getDate();
     var today = getFormatMonth(new Date());
     $("#date1").html(today);
     $("#date2").html(today);
     $("#date3").html(today);
     $("#date4").html(today);


  lay('.demo-input').each(function(){
     laydate.render({
        type: 'month',
         elem: this,
         trigger: 'click',
         theme: '#95d7fb',
         calendar: true,
         showBottom: true,
         done: function () {
            console.log( $("#startDate").val())

         }
     })
 });

})
function init(){
  //地图
//  var mapChart = echarts.init(document.getElementById('mapChart'));
//  mapChart.setOption({
//      bmap: {
//          center: [118.096435,24.485408],
//          zoom: 12,
//          roam: true,
//
//      },
//      tooltip : {
//          trigger: 'item',
//          formatter:function(params, ticket, callback){
//              return params.value[2]
//          }
//      },
//      series: [{
//          type: 'scatter',
//          coordinateSystem: 'bmap',
//          data: [
//            [118.096435, 24.485408, '厦门市'] ,
//            [118.094564, 24.457358, '厦门第一医院'] ,
//            [118.104103, 24.477761, '厦门中山医院'],
//            [118.14748, 24.506295, '厦门中医院'],
//            [118.254841, 24.665349, '厦门第五医院'],
//           ]
//      }]
//  });
//  mapChart.on('click', function (params) {
//      $("#el-dialog").removeClass('hide');
//      $("#reportTitle").html(params.value[2]);
//  });
//
//  var bmap = mapChart.getModel().getComponent('bmap').getBMap()
//  bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP ]}));
//  bmap.setMapStyle({style:'midnight'})


  var rankChart = echarts.init(document.getElementById('rankChart'));
  rankChart.setOption({

   tooltip: {
       trigger: "axis",
	   axisPointer: {
					type: "shadow"
					},
			},

      yAxis: {
        type: 'value',
        axisLabel:{
        textStyle:{
        color:'white'
        }
        }
    },
      xAxis: {
        type: 'category',

						inverse: true,
						axisLine: {show: false},
						axisTick: {show: false},
						axisLabel: {
							fontSize: 12,
							color: "#b0c2f9"
        },
        data: ['Medium','High','Low']
    },

        series: [{
        data: [503,134,110],
        type: "bar",
						barCategoryGap: "60%",
						label: {
							show: true,
							position: "top",
							fontSize: 12,
							color: "white",
							emphasis: {
								color: "#e6b600"
							}
						},
						itemStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 1, 1, 1,
			                        [
			                            {offset: 0, color: '#A6FFFF'},
			                            {offset: 0.5, color: '#80FFFF'},
			                            {offset: 1, color: '#4DFFFF'}
			                        ]
			                    )
			                },
			                emphasis: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 1, 1, 1,
			                        [
			                            {offset: 0, color: '#FFF4C1'},
			                            {offset: 0.7, color: '#FFED97'},
			                            {offset: 1, color: '#FFE153'}
			                        ]
			                    )
			                }
			            }

    }]
    });

//按年份展示数据：折线图
    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({
    tooltip: {
       trigger: "axis",
	   axisPointer: {
					type: "shadow"
					},
			},

      yAxis: {
        type: 'value',
        axisLabel:{
        textStyle:{
        color:'white'
        }
        }
    },
      xAxis: {
        type: 'category',
        //坐标轴颜色
        axisLabel:{
        textStyle:{
        color:'white'
        }
        },
        data: ['1999', '2000', '2001', '2002', '2003','2004','2005','2006','2007','2008','2009','2010','2011',
        '2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
    },

        series: [{
        data: [1,1,3,5,3,3,10,11,19,18,36,30,22,36,34,45,50,49,90,97,84,86,14],

        type: 'line',
        itemStyle : {
                normal : {
                  lineStyle:{
                    color:'#00FF00'
                  }
                }
              },
        //显示文字颜色
        label:{
                    show:true,
                    textStyle:{
        color:'white'
        },
                    formatter:function(data){
                    return data.value;
                    }
                }

    }]
    });



//TYPE类型
    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({

tooltip: {
			trigger: 'item',
            formatter: function(params) {
                var res = '类型：'+params.name+'数量：'+params.data;
                return res;
            }
		},
		grid: {
			top: '5%',
			left: '0%',
	        width: '100%',
	        height: '95%',
	        containLabel: true
	    },
		xAxis: {


			axisLabel: {
                show: true,
                textStyle: {
                    fontSize: '12px',
                    color: '#fff',
                }
           	},

           	axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,
                }
            }
		},

		yAxis: {
		 data : [
			'CWE-264','CWE-415','NOINFO','CWE-400','CWE-416','CWE119','CWE-20','CWE-399','OTHER','CWE-362'],
			axisLabel: {
                show: true,
                textStyle: {
                    fontSize: '12px',
                    color: '#fff',
                }
           	},
           	axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,
                }
            },
            splitLine:{
	            show:false,
    		}
		},

		series :{
			name: '',
			type: 'bar',
			barWidth : 10,
			data:[3,3,3,4,6,7,11,12,25,652],

            label:{
                normal:{
                    show:true,
                    position:'right',
                    textStyle:{
                        color:'white'
                    },
                    formatter:function(params){
                        return params.value
                    }
                }
            },
			itemStyle: {
                normal: {
                	barBorderRadius:[5, 5, 5, 5],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [

                            {offset: 0, color: '#FF3300'},
                            {offset: 1, color: '#FF6600'}
                        ]
                    ),
                },
            },
		}

   });


//维度分析解释
   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({

     color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
     legend: {
         y : '260',
         x : 'center',
         textStyle : {
             color : '#ffffff',

         },
          data : ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',],
     },
     calculable : false,
     tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}条"
     },
     yAxis: [
           {
               type: 'value',
               axisLine : {onZero: false},
               axisLine:{
                   lineStyle:{
                       color: '#034c6a'
                   },
               },

               axisLabel: {
                   textStyle: {
                       color: '#fff'
                   },
                   formatter: function (value) {
                       return value + "k条"
                   },
               },
               splitLine:{
                   lineStyle:{
                       width:0,
                       type:'solid'
                   }
               }
           }
       ],
       xAxis: [
           {
               type: 'category',
               data : ['8:00','10:00','12:00','14:00','16:00','18:00'],
               axisLine:{
                   lineStyle:{
                       color: '#034c6a'
                   },
               },
               splitLine: {
                   "show": false
               },
               axisLabel: {
                   textStyle: {
                       color: '#fff'
                   },
                   formatter: function (value) {
                       return value + ""
                   },
               },
               splitLine:{
                   lineStyle:{
                       width:0,
                       type:'solid'
                   }
               },
           }
       ],
       grid:{
               left: '5%',
               right: '5%',
               bottom: '20%',
               containLabel: true
       },
       series : [
         {
             name:'厦门第一医院',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[15, 0, 20, 45, 22.1, 25,].reverse()
         },
         {
             name:'厦门中山医院',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[25, 10, 30, 55, 32.1, 35, ].reverse()
         },
         {
             name:'厦门中医院',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[35, 20, 40, 65, 42.1, 45, ].reverse()
         },
         {
             name:'厦门第五医院',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[45, 30, 50, 75, 52.1, 55, 6].reverse()
         }
     ]
   });



}

function init2(){
  var lineChart3 = echarts.init(document.getElementById('lineChart3'));
  lineChart3.setOption({

    color:["#87cefa","#ff7f50",],
    legend: {
        y : 'top',
        x : 'center',
        textStyle : {
            color : '#ffffff',

        },
         data : ['门诊人次','住院人次'],
    },
    calculable : false,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
    dataZoom: {
         show: true,
         realtime : true,
         start: 0,
         end: 18,
         height: 20,
         backgroundColor: '#f8f8f8',
         dataBackgroundColor: '#e4e4e4',
         fillerColor: '#87cefa',
         handleColor: '#87cefa',
     },
    yAxis: [
          {
              type: 'value',
              axisLine : {onZero: false},
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },

              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "人"
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              }
          }
      ],
      xAxis: [
          {
              type: 'category',
              data : symptomName,
              boundaryGap : false,
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + ""
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              },
          }
      ],
      grid:{
              left: '5%',
              right: '5%',
              bottom: '20%',
              containLabel: true
      },
      series : [
        {
            name:'门诊费用',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[1150, 180, 2100, 2415, 1212.1, 3125,1510, 810, 2100, 2415, 1122.1, 3215,1510, 801, 2001, 2245, 1232.1, 3245,1520, 830, 2200, 2145, 1223.1, 3225,150, 80, 200, 245, 122.1, 325]
        },
        {
            name:'住院费用',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005,]
        },
    ]
  });


  var lineChart4 = echarts.init(document.getElementById('lineChart4'));
  lineChart4.setOption({

    color:["#87cefa","#ff7f50",],
    calculable : false,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}元"
    },
    dataZoom: {
         show: true,
         realtime : true,
         start: 0,
         end: 18,
         height: 20,
         backgroundColor: '#f8f8f8',
         dataBackgroundColor: '#e4e4e4',
         fillerColor: '#87cefa',
         handleColor: '#87cefa',
     },
    yAxis: [
          {
              type: 'value',
              axisLine : {onZero: false},
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },

              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "元"
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              }
          }
      ],
      xAxis: [
          {
              type: 'category',
              data : symptomName,
              boundaryGap : false,
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + ""
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              },
          }
      ],
      grid:{
              left: '5%',
              right: '5%',
              bottom: '20%',
              containLabel: true
      },
      series : [
        {
            name:'医疗费用',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[1500, 800, 1200, 2450, 1122.1, 1325,1150, 180, 1200, 1245, 1122.1, 1325,150, 180, 1200, 2145, 1212.1, 3215,1510, 180, 2100, 2415, 122.1, 325,150, 80, 200, 245, 122.1, 325].reverse()
        },
    ]
  });

  //年龄分布
  var pieChart2 = echarts.init(document.getElementById('pieChart2'));
  pieChart2.setOption({
    color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}人"
    },
    calculable : true,
    series : [
        {
            name:'发病人数',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '50%',



            sort : 'ascending',
            data:[
                {value:10, name:'婴儿(1-3岁)'},
                {value:5, name:'少儿(4-10岁)'},
                {value:15, name:'少年(10-18岁)'},
                {value:25, name:'青年(18-45岁)'},
                {value:125, name:'中年(45-60岁)'},
                {value:175, name:'老年(60岁以上)'},
            ]
        }
    ]
  })

  //医疗费用组成
  var pieChart3 = echarts.init(document.getElementById('pieChart3'));
  pieChart3.setOption({
    color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}元"
    },
    calculable : true,
    series : [
        {
            name:'发病人数',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '50%',



            sort : 'ascending',
            data:[
                {value:10, name:'诊察费用'},
                {value:500, name:'检查费用'},
                {value:150, name:'检验费用'},
                {value:250, name:'西药费用'},
                {value:125, name:'中药费用'},
                {value:1750, name:'手术费用'},
            ]
        }
    ]
  })
}
