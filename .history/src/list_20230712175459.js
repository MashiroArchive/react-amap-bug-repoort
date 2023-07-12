import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon } from '@uiw/react-amap';
import { Button } from 'antd';

const Example = () => {
    const [show, setShow] = useState(true);
    // 多边形轮廓线的节点坐标数组
    const path2 = [
        new AMap.LngLat(116.368904, 39.913423),
        new AMap.LngLat(116.382122, 39.901176),
        new AMap.LngLat(116.387271, 39.912501),
        new AMap.LngLat(116.398258, 39.904600)
    ];
    const path = [
        [116.403322, 39.920255],
        [116.410703, 39.897555],
        [116.402292, 39.892353],
        [116.389846, 39.891365]
    ];
    const pathArr = [[
        [
            116.482591,
            39.99179
        ],
        [
            116.473675,
            39.986539
        ],
        [
            116.505716,
            39.983934
        ]
    ],
    [
        [
            116.274758,
            39.977339
        ],
        [
            116.371569,
            39.955079
        ],
        [
            116.387952,
            39.983616
        ]
    ],
    [
        [
            116.149094,
            39.985997
        ],
        [
            116.095099,
            39.909208
        ],
        [
            116.269605,
            39.911008
        ]
    ]
    ]

    const [paths, setStatePaths] = useState(pathArr);



    return (
        <>
        <p>{JSON.stringify(paths)}</p>
            <div style={{ width: '100%', height: '500px' }}>
                <Map zoom={14} center={[116.400274, 39.905812]}>
                    {
                        pathArr.map((item,index) => {
                            return  <Polygon
                            key={index}
                            visiable={true}
                            path={item}
                        />
                        })
                    }
                </Map>
                <Button onClick={() => {
                    setStatePaths(state => {
                        state.pop();
                        return [...state];
                    })
                }}>删除</Button>
            </div>
        </>
    );
}

const Mount = () => (
    <APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
        <Example />
    </APILoader>
);

export default Mount;