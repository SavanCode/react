import React,{Component}from 'react'; 
import ReactDOM from 'react-dom';
import './index.css'; 
import jsonData from './list-total.json'
import mapData from './mapData.json'
import 'antd/dist/antd.css'; 
import { Table } from 'antd';
import { Layout, Menu } from 'antd';
// import { NavLink} from "react-router-dom"; 
// import { BrowserRouter,Route,Switch} from "react-router-dom"; 
// import ReactEcharts from 'echarts-for-react';


import echarts from 'echarts'; 
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title'; 
import geoJson from 'echarts/map/json/china.json'; 
const { Header, Content, Footer } = Layout;
 

let worldList =[]
let countryList=[]
let infectedNum =[] 
let mapDataList =[]
  ///"广东"={confirm:** suspect:** heal** dead:**}

let index=0;
jsonData.data.areaTree.forEach((item,i)=>{
 if(item.name.length>0){
    worldList[index]={
      key:index,
      name:item.name,
      confirm:item.today.confirm+item.total.confirm,
      suspect:item.today.suspect+item.total.suspect,
      heal:item.today.heal+item.total.heal,
      dead:item.today.dead+item.total.dead,
    };
    countryList.push(item.name);
    infectedNum.push(item.today.confirm+item.total.confirm);
 }
 index++
}) 
console.log(worldList)
 
 


JSON.parse(mapData.data).areaTree.forEach((item,i)=>{
  if(item.name.length>0){
     mapDataList.push({ 
       name:item.name,
       value:item.today.confirm+item.total.confirm,
     }); 
  } 
 }) 

console.log(mapDataList)
const columns = [
  {
    title: '国家',
    dataIndex: 'name',
  },
  {
    title: '确诊',
    dataIndex: 'confirm',
    sorter: {
      compare: (a, b) => a.confirm - b.confirm,
      multiple: 4,
    },
  },
  {
    title: '疑似',
    dataIndex: 'suspect',
    sorter: {
      compare: (a, b) => a.suspect - b.suspect,
      multiple: 3,
    },
  },
  {
    title: '康复',
    dataIndex: 'heal',
    sorter: {
      compare: (a, b) => a.heal - b.heal,
      multiple: 2,
    },
  },
  {
    title: '死亡',
    dataIndex: 'dead',
    sorter: {
      compare: (a, b) => a.dead - b.dead,
      multiple: 1,
    },
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const Etable=()=>{
  return(
    <Table columns={columns} dataSource={worldList} onChange={onChange}  />
  )
}
const HeaderLink=()=>{
  return(
    <>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">table</Menu.Item>
      <Menu.Item key="2">echart</Menu.Item>
      <Menu.Item key="3">emap</Menu.Item>
    </Menu>
  </Header>
  </>
  )
}
const MainContent=()=>{
  return(
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
    </div>
  </Content>
  )
}
const FooterArea =()=>(
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
)
  
const App=()=>{
  return(
    <>
     <Layout>
      <HeaderLink />
      {/* <MainContent /> */}
      {/* <FooterArea /> */}
      <h2>Echart </h2>
       <Etable />
       <EChartsView/>
       <Emap map={mapDataList}/>
    </Layout> 
    </>
  )
}

// const Routes =()=> (
//   <BrowserRouter>
//         <Header />
//         <Switch>
//             <Route exact path="/wedqe" component={App} />
//             <Route exact path="/view"  component={App} />
//             <Route exact path="/account/:id"  component={App} />
//              <Route exact path="/create"  component={App} /> 
//           </Switch>
//   </BrowserRouter>
//  ) 

class EChartsView extends Component {
  componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echart'));
      // 绘制图表
      myChart.setOption({
          title: { text: 'ECharts' },
          tooltip: {},
          xAxis: {
              data:countryList
          },
          yAxis: {},
          series: [{
              name: '感染人数',
              type: 'bar',
              data: infectedNum
          }]
      });
  }

  render() {
      return(
          <div id="echart" style={{ width: '80vw', height: "80vh" }}></div>
      );
  }
}


//map 
class Emap extends React.Component{
  constructor(props){
      super(props)
  }
  componentDidMount(){
      var myChart = echarts.init(document.getElementById('echartsmap'));
      myChart.showLoading();
      myChart.hideLoading();
      echarts.registerMap('China', geoJson);
      let option={
          title: {
              text: '中国疫情图',
              subtext: '数据来自163',
              sublink: 'https://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list'
          },
          // dataRange: {//分段标色
          //     x: 'left',
          //     y: 'center',
          //     splitList: [
          //     {start: 2000, label: '2000以上', color: 'rgb(50,0,50)'},
          //     {start: 1000, end: 2000, label: '1000-2000', color: "rgb(100,50,30)"},
          //     {start: 500, end: 1000, label: '500-1000', color:' rgb(200,50,100)'},
          //     {start: 200, end: 500, label: '200-500', color: 'rgb(200,100,100)'},
          //     {start: 50, end: 200, label: '50-200', color:' rgb(255,100,100)'},
          //     {start: 10, end: 50, label: '10-50', color: 'rgb(255,255,100)'},
          //     {start: 1, end: 10, label: '0-10', color:' rgb(255,255,200)'},
          //     {start: 0, end: 1, label: '0', color:' rgb(255,255,255)'}
          //     ]},
          tooltip: {},
          visualMap: {
            type: 'piecewise',
            pieces: [
              { min: 10000, max: 1000000, label: '确诊大于等于10000人', color: '#372a28' },
              { min: 5000, max: 9999, label: '确诊5000-9999人', color: '#4e160f' },
              { min: 1000, max: 4999, label: '确诊1000-4999人', color: '#974236' },
              { min: 100, max: 999, label: '确诊100-999人', color: '#ee7263' },
              { min: 1, max: 99, label: '确诊1-99人', color: '#f5bba7' },
            ],
            color: ['#E0022B', '#E09107', '#A3E00B']
          },
          toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                  dataView: {readOnly: false},
                  restore: {},
                  saveAsImage: {}
              }
          },
          series: [
              {
                  name: '确诊',
                  type: 'map',
                  mapType: 'China', // 自定义扩展图表类型
                  label: {
                    normal: {
                        textStyle: {
                            fontSize: 7,
                            color: '#333'
                        },
                        show:true
                    },
                    emphasis: {
                        show: true
                    }
                },
                  data: this.props.map
              }
          ]
      };
      myChart.setOption(option);
  
  }
  render() {
      return (
          <div id="echartsmap" style={{ width: '80%', height: "80%" }}></div>
      );
  }
}
 



ReactDOM.render(<App/>,document.getElementById('root'));