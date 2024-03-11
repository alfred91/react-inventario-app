import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventarioTable({ token, onLogout }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://44.193.185.234/api/v1/inventario', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setItems(response.data.data);
            })
            .catch(error => console.log(error));
    }, [token]);

    return (

        <div className="container mx-auto mt-8">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Código
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Modelo
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Fabricante
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Descripción
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Imagen
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Stock
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Estado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Categoría
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Localización
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {items.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.code}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.model}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.manufacturer}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img src={item.image} alt={item.model} className="w-20 h-20 object-cover" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${item.location.city}, ${item.location.building_name}, Room ${item.location.room_number}`}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default InventarioTable;
