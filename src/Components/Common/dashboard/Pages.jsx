import React from 'react'
import Cards from '../../layout/charts/Cards'
import Charts from '../../layout/charts/Charts'
import Piecharts from '../../layout/charts/PieCharts'
import "./pages.css"
import LineCharts from '../../layout/charts/LineCharts'



const Pages = () => {
    return (
        <>
            <div>
                <h1 className='heading1'>Dashboard </h1>
                <div className='cards'>
                    <Cards />
                </div>
            </div>

            <div>
                <h1 className='heading2'>Charts</h1>
                <div style={{display : "flex"}}> 
                <div className='charts'>
                    <Charts />
                </div>
                <div className='charts pie-chart'>
                    <Piecharts />
                </div>
                </div>
            </div>

            {/* <div>
                 <h1 className='heading3'>Pie Charts</h1> 
                
            </div> */}

            <div>
                <h1 className='heading4'>Line-Charts</h1>
                <div className='charts'>
                    <LineCharts />
                </div>
            </div>






        </>
    )
}

export default Pages
