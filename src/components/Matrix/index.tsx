import './style.css'

import {Table} from 'react-bootstrap'
import { useState,useEffect } from 'react'

export const Matrix = () =>{
    const [matrix,setMatrix] = useState([['','',''],['','',''],['','','']])
    const [turn,setTurn] = useState('x')
    const [winner,setWinner] = useState('false')
    const [tie,setTie] = useState('false')

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
        setWinner(whoWon())
        if (winner == 'false'){
            setTie(isTie())
        }
    }

    const whoWon = () =>{
        for (let i=0;i<3;i++){
            if(matrix[i][0] == matrix[i][1] && matrix[i][0] == matrix[i][2] && matrix[i][0] != ''){
                return matrix[i][0]
            }
            if (matrix[0][i] == matrix[1][i] && matrix[0][i] == matrix[2][i] && matrix[0][i] != ''){
                return matrix[0][i]
            }

        }
        if (matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2] && matrix[0][0] != '' ){
            return matrix[0][0]
        }
        if (matrix[0][2] == matrix[1][1] && matrix[0][2] == matrix[2][0] && matrix[0][2] != ''){
            return matrix[0][2]
        }
        return 'false'
    }

    const isTie = () =>{
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                if (matrix[i][j] == ''){
                    return 'false'
                }
            }
        }
        return 'true'
    }

    useEffect(()=>{
        if (winner != 'false'){
            alert(`${winner} has won!`)
            setWinner('false')
            setTie('false')
            setMatrix([['','',''],['','',''],['','','']])
        }
        else if (tie != 'false'){
            alert('Tie!')
            setWinner('false')
            setTie('false')
            setMatrix([['','',''],['','',''],['','','']])
        }
        
        
        
    },[matrix,winner,tie])

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