import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import { Context } from '..';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";



const BrandBar = observer(() => {
const {device} = useContext(Context)
  return (
   <Row className='d-flex'>
      {device.brands.map(brand => 
         <Card
           style={{ width: '8rem', cursor: 'pointer'}}
           key={brand.id}
           className='p-3 m-2'  
           onClick={() => device.setSelectedBrand(brand)}
           border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}           
         >
            {brand.name}
         </Card>
      )}
   </Row>
   )
})
export default BrandBar