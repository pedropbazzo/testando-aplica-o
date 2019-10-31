import React from 'react';
import { BottomNavigationAction } from '@material-ui/core';

const Hotelsblacklistactions = props => (

    <table className="responsive-table">
        <thead>
            <tr>
                <th>Ação</th>
                <th>Calendario</th>
                <th>Código do hotel</th>
        </tr>
    </thead>
<tbody>
    {
        props.users.length > 0 ? (
            props.users.map (user => (
                <tr key={action.id}>
                    <td>{data.calendario}</td>
                    <td>{codigo.id}</td>    
                    <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(user)}>
                                editar
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteaction(action.id)}>
                                deletar
                            </button>
                            </td> 
                    </tr>
            ))
            ) : (
                <tr>
                    <td colSpan={3}>{props.actions[0]} No Actions</td>
                </tr>
            )
    }          
</tbody>
  </table>
);
    
export default Hotelsblacklistactions;