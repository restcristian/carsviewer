import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import vehiclesReducer from '../../store/Vehicles';
import { IVehiclesState } from '../../store/Vehicles/reducers';

import './VehicleList.scss';

const VehicleList: FC = () => {
    const { vehicles, isLoading } = useSelector((state: RootState): IVehiclesState => state[vehiclesReducer.name]);

    if (isLoading) {
        return <h3>Fetching Vehicles</h3>;
    }
    if (vehicles.length === 0) {
        return <h3>No Vehicles to be Shown</h3>;
    }
    return (
        <ul className="VehicleList">
            {vehicles.map((vehicle, index) => (
                <li className="VehicleList__item" key={index}>
                    {/* {vehicle.make} */}
                    <div className="VehicleList__item-content">
                        <h4 className="VehicleList__item-title">{`${vehicle.make} ${vehicle.model}`}</h4>
                        <ul className="VehicleList__item-properties">
                            <li className="VehicleList__item-propertyRow">
                                <span className="VehicleList__item-label">EnginePowerPS:</span>
                                <span className="VehicleList__item-value">{vehicle.enginePowerPS}</span>
                            </li>
                            <li className="VehicleList__item-propertyRow">
                                <span className="VehicleList__item-label">EnginePowerKW:</span>
                                <span className="VehicleList__item-value">{vehicle.enginePowerKW}</span>
                            </li>
                            <li className="VehicleList__item-propertyRow">
                                <span className="VehicleList__item-label">FuelType:</span>
                                <span className="VehicleList__item-value">{vehicle.fuelType}</span>
                            </li>
                            <li className="VehicleList__item-propertyRow">
                                <span className="VehicleList__item-label">BodyType:</span>
                                <span className="VehicleList__item-value">{vehicle.bodyType}</span>
                            </li>
                            <li className="VehicleList__item-propertyRow">
                                <span className="VehicleList__item-label">EngineCapacity:</span>
                                <span className="VehicleList__item-value">{vehicle.engineCapacity}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default VehicleList;
