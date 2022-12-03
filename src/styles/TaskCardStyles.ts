import styled from "styled-components"

export const TaskCardContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: dimgrey;
    padding: 2%;
    border: solid 1px black;
    margin: 1% 0;
  `

export const TaskTitle = styled.h1`
    color: orange;
    margin-bottom: 0;
  `

export const TaskDescription = styled.p`
    color: white;
  `

export const TaskInfo = styled.div`
    text-align: left;
    flex: 3;
  `

export const Buttons = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
  `

export const Button = styled.button`
    background-color: white;
    padding: 0.5em 2em;
    border-radius: 1.5em;
    cursor: pointer;
    color: ${props => props.color ? props.color : "white"};
    border: solid 1px ${props => props.color ? props.color : "white"};
`

export const InputField = styled.input`
  margin: 2%;

`