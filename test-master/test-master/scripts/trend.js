var symptomName = last_year_month();


$(function(){


  init();

})

 function init(){

   //原因图
   var myCharts = echarts.init(document.getElementById('histogramChart1'));
        var option = {
        tooltip: {
				show: true
					},
            series: {
                type: 'sunburst',
                center: ['55%', '66%'],
                levels: [{}, {
							r0: "2%",
							r: "30%",
							itemStyle: {
								borderWidth: 0.8
							},
							label: {
								align: "right",
								fontSize: 10,
								color: '#fff',
								textBorderWidth: 0
							}
						}, {
							r0: "30%",
							r: "57%",
							itemStyle: {
								borderWidth: 0.5
							},
							label: {
								position: 'outside',
//								padding: 3,
								fontSize:10,
								color: 'auto',
								textBorderWidth: 0
							}
						}],
                data: [{
                    name: 'buffer overflow',
                     itemStyle: {
                     color: '#ff1493'
                     },
                   children: [{
                            name: 'buffer overflow',
                            value:4,
                     itemStyle: {
                     color: '#ff1493'
                     },
                        },
                        {
                            name: 'thread overflow',
                            value: 2,
                     itemStyle: {
                     color: '#ff1493'
                     },
                        },
                        {
                            name: 'heap overflow',
                            value: 2,
                     itemStyle: {
                     color: '#ff1493'
                     },
                        },
                        {
                            name: 'integer overflow',
                            value: 1,
                     itemStyle: {
                     color: '#ff1493'
                     },
                        }, {
                            name: 'stack overflow',
                            value: 1,
                     itemStyle: {
                     color: '#ff1493'
                     },
                        },
                        {
                            name: 'array index overflow',
                            value: 1,
                     itemStyle: {
                     color: '#ff1493'
                     },
                        },
                    ]
                }, {
                    name: 'concurrent',
                     itemStyle: {
                     color: '#00ffff'
                     },
                     children: [{
                            name: 'concurrent access',
                            value:15,
                     itemStyle: {
                     color: '#00ffff'
                     },
                        },
                        {
                            name: 'multiple concurrents',
                            value: 16,
                     itemStyle: {
                     color: '#00ffff'
                     },
                        },
                        {
                            name: 'concurrent beyond limit',
                            value: 1,
                     itemStyle: {
                     color: '#00ffff'
                     },
                        },
                        {
                            name: 'mishandle concurrent',
                            value: 4,
                     itemStyle: {
                     color: '#00ffff'
                     },
                        }, {
                            name: 'simultaneous update',
                            value: 1,
                     itemStyle: {
                     color: '#00ffff'
                     },
                        },
                        {
                            name: 'lack synchronization',
                            value: 1,
                     itemStyle: {
                     color: '#00ffff'
                     },
                        },
                    ]
                }, {
                    name: 'LOCK',
                     itemStyle: {
                     color: '#ffff00'
                     },
                    children: [{
                            name: 'wrong lock',
                            value:15,
                     itemStyle: {
                     color: '#ffff00'
                     },
                        },
                        {
                            name: 'double lock',
                            value: 2,
                     itemStyle: {
                     color: '#ffff00'
                     },
                        },
                        {
                            name: 'lock drop',
                            value: 2,
                     itemStyle: {
                     color: '#ffff00'
                     },
                        },
                        {
                            name: 'not protected with lock',
                            value: 3,
                     itemStyle: {
                     color: '#ffff00'
                     },
                        },
                        {
                            name: 'semaphore use',
                            value: 2,
                     itemStyle: {
                     color: '#ffff00'
                     },
                        },
                        {
                            name: 'deadlock',
                            value: 2,
                     itemStyle: {
                     color: '#ffff00'
                     },
                        },
                    ]
                },
                {
                    name: 'memory corruption',
                     itemStyle: {
                     color: '#1e90ff'
                     },
                    children: [{
                            name: 'memory corruption',
                            value:10,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                        {
                            name: 'access memory locations',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                        {
                            name: 'share same memory location',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                        {
                            name: 'memory consumption',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                        {
                            name: 'modify the memory structure',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                        {
                            name: 'memory safety violated',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                        {
                            name: 'memory ordering is mishandled',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },{
                            name: 'not checking user mode memory',
                            value: 1,
                     itemStyle: {
                     color: '#1e90ff'
                     },
                        },
                    ]
                },
                {
                    name: 'race condition',
                    children: [{
                            name: 'race condition',
                            value:475
                        },
                        {
                            name: 'multiple race conditions',
                            value: 24
                        },
                        {
                            name: 'use after free',
                            value: 11
                        },
                        {
                            name: 'TOCTOU',
                            value: 4
                        },
                        {
                            name: 'permission prompts',
                            value: 3
                        },{
                            name: 'out of bound',
                            value: 2
                        },{
                            name: 'page-writability',
                            value: 4
                        },
                        {
                            name: 'others',
                            value: 7
                        },
                    ]
                },
                {
                    name: 'error',
                     itemStyle: {
                     color: '#ff6347'
                     },
                    children: [{
                            name: 'error parameter',
                            value:1,
                     itemStyle: {
                     color: '#ff6347'
                     },
                        },
                        {
                            name: 'error command',
                            value: 2,
                     itemStyle: {
                     color: '#ff6347'
                     },
                        },
                        {
                            name: 'error operation',
                            value: 24,
                     itemStyle: {
                     color: '#ff6347'
                     },
                        },

                    ]
                },
                {
                    name: 'symlink',
                     itemStyle: {
                     color: '#228B22'
                     },
                    children: [{
                            name: 'symlink attack',
                            value:9,
                     itemStyle: {
                     color: '#228B22'
                     },
                        },
                        {
                            name: 'symlink TOCTOU',
                            value: 1,
                     itemStyle: {
                     color: '#228B22'
                     },
                        },
                        {
                            name: 'symlink attack created',
                            value: 1,
                     itemStyle: {
                     color: '#228B22'
                     },
                        },

                    ]
                },
                {
                    name: 'file processing',
                     itemStyle: {
                     color: '#ee82ee'
                     },
                    children: [{
                            name: 'not properly create temporary files',
                            value:5,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                        {
                            name: 'uses temporary files insecurely',
                            value: 4,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                        {
                            name: 'improper filename sanitization',
                            value: 1,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                        {
                            name: 'not verify files',
                            value: 1,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                        {
                            name: 'file system weakness',
                            value: 2,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                        {
                            name: 'Improper handling of the lock file',
                            value: 2,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                        {
                            name: 'file system weakness',
                            value: 1,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },{
                            name: 'configuration file ',
                            value: 1,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },{
                            name: 'uploading file with executable extension',
                            value: 1,
                     itemStyle: {
                     color: '#ee82ee'
                     },
                        },
                    ]
                },
                {
                    name: 'thread use',
                    children: [{
                            name: 'thread-unsafe',
                            value:4
                        },
                        {
                            name: 'thread boundary',
                            value: 1
                        },
                        {
                            name: 'threads library',
                            value: 1
                        },
                        {
                            name: 'threads scheduler',
                            value: 1
                        },
                        {
                            name: 'simultaneous threads',
                            value: 2
                        },

                    ]
                },
                {
                    name: 'timing',
                     itemStyle: {
                     color: '#FF0000'
                     },
                    children: [{
                            name: 'timing',
                            value:4,
                     itemStyle: {
                     color: '#FF0000'
                     },
                        },
                        {
                            name: 'not properly restrict timeline operations',
                            value: 1,
                     itemStyle: {
                     color: '#FF0000'
                     },
                        },
                        {
                            name: 'leverag a disabled  time window',
                            value: 1,
                     itemStyle: {
                     color: '#FF0000'
                     },
                        },

                    ]
                },
                { name: 'socket uses',
                    children: [{
                            name: 'socket uses',
                            value:2
                        },
                        { name: 'socket file',
                            value: 1
                        },
                    ]
                },{ name: 'privilege escalation',
                    children: [{
                            name: 'privilege escalation',
                            value:3
                        },
                        { name: 'TOCTOU privilege escalation',
                            value: 1
                        },
                        { name: 'svpn components runs',
                            value: 1
                        },
                    ]
                },{ name: 'access errors',
                     itemStyle: {
                     color: '#F08080'
                     },
                    children: [{
                            name: 'local access',
                            value:1,
                     itemStyle: {
                     color: '#F08080'
                     },
                        },
                        { name: 'not properly restrict access',
                            value: 1,
                     itemStyle: {
                     color: '#F08080'
                     },
                        },
                        { name: 'Incorrect access control ',
                            value: 3,
                     itemStyle: {
                     color: '#F08080'
                     },
                        },{
                            name: 'not prevent recursive callback access',
                            value:1,
                     itemStyle: {
                     color: '#F08080'
                     },
                        },
                        { name: ' concurrent access',
                            value: 5,
                     itemStyle: {
                     color: '#F08080'
                     },
                        },
                    ]
                },{ name: 'limitations',
                    children: [{
                            name: 'imit the amount of data read',
                            value:2
                        },
                        { name: 'resource limitations',
                            value: 1
                        },
                        { name: 'concurrent  beyond  limit',
                            value: 1
                        },
                    ]
                },{ name: 'other',
                     itemStyle: {
                     color: '#adff2f'
                     },
                    children: [{
                            name: 'unspecified vulnerabilities',
                            value:2,
                     itemStyle: {
                     color: '#adff2f'
                     },
                        },
                        { name: 'unspecified vectors',
                            value: 2,
                     itemStyle: {
                     color: '#adff2f'
                     },
                        },
                        { name: 'other',
                            value: 53,
                     itemStyle: {
                     color: '#adff2f'
                     },
                        },
                    ]
                },



                ]
            }
        };
        //浏览器窗口发生变化时，重置报表大小
				$(window).resize(function() {
					histogramChart1.resize();
				});
        myCharts.setOption(option);


   //结果分析
   var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
   histogramChart3.setOption({

    tooltip: {
        trigger: 'item'
    },

    legend: {
            type: 'scroll',            // 设置图例翻页
            icon: 'rect',
            itemWidth: 12,             // 图例图形宽度
            itemHeight: 10,
            orient: 'horizontal',     // 图例横向排布

            left: 90,				// 图例位置
            right:240,
            bottom: 8,
            textStyle: {
              color: '#fff',
              fontSize:16
            },
            pageIconColor: '#fff',
            pageTextStyle: {
              color: '#fff'
            },
            itemGap: 20
		},
    series: [
        {
            name: '结果分类',
            type: 'pie',

            radius: '50%',
            data: [
                {value: 253, name: 'denial of service(DOS)', itemStyle: {color: '#adff2f'},},
                {value: 84, name: 'execute arbitrary code', itemStyle: {color: '#ffFF00'},},
                {value: 138, name: 'privilege escalation', itemStyle: {color: '#AFEEEE'},},
                {value: 49, name: 'information leak/disclosure', itemStyle: {color: '#ff00ff'},},
                {value: 52, name: 'modify/overwrite/leak/read/memory corruption/freed  memory', itemStyle: {color: '#f5fffa'},},
                {value: 49, name: 'bypass restrictions/security/authentication/ protections', itemStyle: {color: '#00ced1'},},
                {value: 23, name: 'buffer overflow', itemStyle: {color: '#ff8c00'},},
                {value: 34, name: 'deadlock', itemStyle: {color: '#8A2BE2'},},
                {value: 38, name: 'race condition',itemStyle: {color: '#1E90FF'},},
                {value: 54, name: 'reade/modify/overwrite/delete/replace files', itemStyle: {color: '#ff69B4'},},
                {value: 57, name: 'Use After Free', itemStyle: {color: '#ff0000'},},
                {value: 19, name: 'NULL pointer dereferenc', itemStyle: {color: '#00FFFF'},},
                {value: 14, name: 'double free/fetch', itemStyle: {color: '#ffe4e1'},},
                {value: 68, name: 'obtain access ', itemStyle: {color: '#9400D3'},},
                {value: 17, name: 'out of bounds (access,memory,bytes)', itemStyle: {color: '#20b2aa'},},
                {value: 9, name: 'process/system hang', itemStyle: {color: '#ff1493'},},
                {value: 7, name: 'process/host/application/device/system Crash', itemStyle: {color: '#8470ff'},},
                {value: 3, name: 'kill processes', itemStyle: {color: '#afeeee'},},
                {value: 2, name: 'error response', itemStyle: {color: '#a0522d'},},
                {value: 8, name: 'panic', itemStyle: {color: '#d2b48c'},},
                {value: 4, name: 'exploit heap corruption', itemStyle: {color: '#f0e68c'},},
                {value: 3, name: 'attack vectors', itemStyle: {color: '#00bfff'},},
                {value: 43, name: 'others', itemStyle: {color: '#800000'},},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 100,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(1, 1, 1, 0.5)'
                }
            }
        }
    ]
   })
 }
