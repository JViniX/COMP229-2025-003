import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-inventory';

const ListInventory = () => {
    const [inventoryList, setInventoryList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadInventory = () => {
        list().then((data) => {
            if (data) {
                setInventoryList(data || []);
                
                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    useEffect(() => {
        loadInventory();
    }, []);

    return (
        <>
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">Item</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {inventoryList.map(product =>
                                <tr >
                                    <td className="text-center"> {product.item || ''} </td>
                                    <td className="text-center"> {product.qty || ''} </td>
                                    <td className="text-center"> {product.status || ''} </td>
                                </tr>
                            )}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default ListInventory;