import React, { useState, useRef } from 'react';
import { Map, APILoader, Polygon } from '@uiw/react-amap';
import { Button } from 'antd';

const Example = () => {
    const [show, setShow] = useState(true);
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
        <p>
        <code>
        {JSON.stringify(paths, null, 2)}
        </code>
        </p>
            <div style={{ width: '300px', height: '300px' }}>
                <Map zoom={14} center={[116.482591, 39.99179]}>
                    {
                        paths.map((item,index) => {
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
                }}>删除最后一个</Button>
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