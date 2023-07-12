import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon } from '@uiw/react-amap';

const Example = () => {
  const [show, setShow] = useState(true);
  // 多边形轮廓线的节点坐标数组
  const path2 = [
    new AMap.LngLat(116.368904,39.913423),
    new AMap.LngLat(116.382122,39.901176),
    new AMap.LngLat(116.387271,39.912501),
    new AMap.LngLat(116.398258,39.904600)
  ];
  const path = [
    [116.403322, 39.920255],
    [116.410703, 39.897555],
    [116.402292, 39.892353],
    [116.389846, 39.891365]
  ];
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '隐藏' : '显示'}
      </button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map zoom={14} center={[116.400274, 39.905812]}>
          <Polygon
            visiable={show}
            path={path}
            strokeColor="#FF33FF"
            strokeWeight={6}
            strokeOpacity={0.2}
            fillOpacity={0.4}
            fillColor="#1791fc"
            zIndex={50}
            draggable={true}
            onChange={e=>console.log(e)}
            onDragStart={(e)=>{console.log(e)}}
            onDragging={(e)=>{console.log(e)}}
            onDragEnd={(e)=>{console.log(e)}}
          />
          <Polygon
            visiable={show}
            path={path2}
            strokeColor="#FF33FF"
            strokeWeight={6}
            strokeOpacity={0.2}
            fillOpacity={0.4}
            fillColor="#1791fc"
            zIndex={50}
          />
        </Map>
      </div>
    </>
  );
}

const Mount = () => (
  <APILoader  akey="a7a90e05a37d3f6bf76d4a9032fc9129">
    <Example />
  </APILoader>
);

export default Mount;