
$(function(){


  init();

})
function init(){



  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

  //BaseScore
  var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
  histogramChart1.setOption({

  tooltip : {
            trigger: 'item',
            formatter: "分数：{b}<br/>数量：{c}个"
        },
  series: [{
        type: 'treemap',
        roam: false,
        label: {
							show: true,
							position: "in",
							fontSize:12,
							color: "white",
							emphasis: {
								color: "#e6b600"
							}
				},
        data: [{name:6.9,value:103},
               {name:4.4,value:79},
               {name:6.8,value:67},
               {name:4.3,value:53},
               {name:1.9,value:50},
               {name:4.9,value:37},
               {name:7.6,value:37},
               {name:4.7,value:33},
               {name:5.0,value:25},
               {name:3.3,value:15},
               {name:6.2,value:14},
               {name:2.1,value:13},
               {name:7.1,value:32},
               {name:9.3,value:27},
               {name:5.1,value:24},
               {name:7.2,value:19},
               {name:4.0,value:17},
               {name:4.6,value:9},
               {name:5.8,value:9},
               {name:1.2,value:8},
               {name:2.6,value:8},
               {name:5.4,value:8},
               {name:6.0,value:7},
               {name:7.8,value:6},
               {name:6.3,value:5},
               {name:3.5,value:7},
               {name:5.7,value:4},
               {name:7.5,value:3},
               {name:3.7,value:7},
               {name:8.5,value:4},
               {name:10,value:4},
               {name:6.4,value:2},
               {name:5.5,value:1},
               {name:2.9,value:2},
               {name:5.2,value:2},
               {name:6.5,value:1},
               {name:6.1,value:1},
               {name:5.9,value:1},
               {name:5.5,value:1},
               {name:6.6,value:1},
               {name:7.9,value:1},
               ]
    }]
   })



//Authinetion分布
   var labelFromatter = {
       normal : {
           label : {
              position : 'center',
               formatter : function (params){
                 console.log(params)
                 if(params.name == "None"){
                   return "None"+":"+(params.percent + '%')
                 }else{
                   return "Single"+":"+(params.percent + '%')
                 }
               },
           },
           labelLine : {
               show : false
           }
       },
   };
  //Authention
  var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
  histogramChart2.setOption({

      color: ['#87cefa','#FD6C88'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}({c})<br/>{d}%"
        },

        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                radius : [55, 95],
                x: '0%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'None', value:703},
                    {name:'Single', value:44},
                ]
            },
        ],
  })

    //accessComplexity
    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
      color:["#66FFFF","#FF6699","#FFFF00",],
      tooltip : {
       trigger: 'item',
       formatter: "{b}({c})条"
      },
      calculable : true,
      series : [
          {

              type:'pie',
              radius : [30, 110],
              center : ['50%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:119, name:'HIGH'},
                  {value:502, name:'MEDIUM'},
                  {value:126, name:'LOW'},

              ]
          }
      ]
    })

    //ImpactScore
    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption({

  tooltip : {
            trigger: 'item',
            formatter: "分数：{b}<br/>数量：{c}个"
        },
  series: [{
        type: 'treemap',
        roam: false,
        label: {
							show: true,
							position: "in",
							fontSize:12,
							color: "white",
							emphasis: {
								color: "#e6b600"
							}
				},
        data: [{name:6.9,value:103},
               {name:4.4,value:79},
               {name:6.8,value:67},
               {name:4.3,value:53},
               {name:1.9,value:50},
               {name:4.9,value:37},
               {name:7.6,value:37},
               {name:4.7,value:33},
               {name:5.0,value:25},
               {name:3.3,value:15},
               {name:6.2,value:14},
               {name:2.1,value:13},
               ]
    }]


    })

    //integrityImpact
    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption({
      color:['#FFFF37'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{b}<br/>{c}条"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['PARTIAL','COMPLETE','NONE',],
              axisLine:{
                   lineStyle:{
                       color: '#FFE153'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#FFE153'
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
                      return value
                  },
              },
          }
      ],
      series : [
          {

              type:'bar',
              label: {
							show: true,
							position: "top",
							fontSize: 12,
							color: "white",
							emphasis: {
								color: "#e6b600"
							}
						},
              barWidth:30,
              data:[257,218,272],
          },
      ]
    })

    //availabilityImpact
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
      color:['#FFFFCC'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{b}<br/>{c}条"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['PARTIAL','COMPLETE','NONE',],
              axisLine:{
                   lineStyle:{
                       color: '#FFE153'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#FFE153'
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
                      return value
                  },
              },
          }
      ],
      series : [
          {

              type:'bar',
              label: {
							show: true,
							position: "top",
							fontSize: 12,
							color: "white",
							emphasis: {
								color: "#e6b600"
							}
						},
              barWidth:30,
              data:[295,336,116],
          },
      ]
    })

    //Access Vector
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption( {

      color:["#66FFFF","#FF6699","#FFFF00",],
      tooltip : {
       trigger: 'item',
       formatter: "{b}<br/>{c}条"
      },
      calculable : true,
      series : [
          {

              type:'pie',
              radius : [30, 110],
              center : ['50%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:334, name:'NETWORK'},
                  {value:15, name:'ADJACENT_NETWORK'},
                  {value:398, name:'LOCAL'},



              ]
          }
      ]
    });

    //confidentialityImpact
    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption( {
      color:['#BBFFFF'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{b}<br/>{c}条"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['PARTIAL','COMPLETE','NONE',],
              axisLine:{
                   lineStyle:{
                       color: '#FFE153'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#FFE153'
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
                      return value
                  },
              },
          }
      ],
      series : [
          {

              type:'bar',
              label: {
							show: true,
							position: "top",
							fontSize: 12,
							color: "white",
							emphasis: {
								color: "#e6b600"
							}
						},
              barWidth:30,
              data:[277,225,245],
          },
      ]
    });

}
