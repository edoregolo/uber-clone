import React from 'react'
import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken =
    'pk.eyJ1IjoiZWRvcmVnb2xvIiwiYSI6ImNrdm05ZXA3bjFkcDMyb3RrY2Nxc3VtZGYifQ.nqRFisQNOuKEyXbxHo_QYw'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [8.880970, 45.468231],
            zoom: 10
        })
    }, [])

    return <Wrapper id="map"/>
}

export default Map

const Wrapper = tw.div`
    flex-1
`
