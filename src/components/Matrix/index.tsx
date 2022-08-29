import './style.css'

import {Table} from 'react-bootstrap'
import { useState,useEffect } from 'react'

export const Matrix = () =>{
    const [matrix,setMatrix] = useState([['','',''],['','',''],['','','']])
    const [turn,setTurn] = useState('x')

    const handleClick = (row: number,column: number) =>{
        var newMatrix = matrix
        newMatrix[row][column] = turn
        if (turn == 'x'){
            setTurn('o')
        }
        else{
            setTurn('x')
        }
        setMatrix(newMatrix)
    }

    useEffect(()=>{
        console.log("useeffect")
    },[matrix])

    return(
        <Table bordered>
        <tbody>
          <tr>
              <td onClick={() => handleClick(0,0)} className='matrixData'>{matrix[0][0]}</td>
              <td onClick={() => handleClick(0,1)} className='matrixData'>{matrix[0][1]}</td>
              <td onClick={() => handleClick(0,2)} className='matrixData'>{matrix[0][2]}</td>
          </tr>
          <tr>
              <td onClick={() => handleClick(1,0)} className='matrixData'>{matrix[1][0]}</td>
              <td onClick={() => handleClick(1,1)} className='matrixData'>{matrix[1][1]}</td>
              <td onClick={() => handleClick(1,2)} className='matrixData'>{matrix[1][2]}</td>
          </tr>
          <tr>
              <td onClick={() => handleClick(2,0)} className='matrixData'>{matrix[2][0]}</td>
              <td onClick={() => handleClick(2,1)} className='matrixData'>{matrix[2][1]}</td>
              <td onClick={() => handleClick(2,2)}  className='matrixData'>{matrix[2][2]}</td>
          </tr>
        </tbody>
      </Table>
    )
}