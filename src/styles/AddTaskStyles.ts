import styled from "styled-components"

export const Form = styled.form`
        background: #404040;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4%;
        gap: 10%;
    `

export const Field = styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
        gap: 5px;
    `

export const SubmitButton = styled.button`
        padding: 1.5% 3% 1.5% 3%;
        border-radius: 30px;
        background: orange;
        color: white;
        cursor: pointer;
        width: 30%;
    `

export const TextEntry = styled.input`
        border-radius: 10px;
        height: 1.6em;
        padding-left: 5%;
        width: 90%;
    `

export const Label = styled.label`
        text-align: left;
        padding-left: 5%;
        padding-right: 1%;
    `
