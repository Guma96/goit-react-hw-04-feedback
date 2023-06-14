import styled from "styled-components";

export const FeedbackPanel = styled.div`
       display: flex;
        gap: 20px;
`;

export const Button = styled.button`
    min-width: 130px;
        height: 40px;
        padding: 0px;
        margin-top: 15px;
              cursor: pointer;

        background-color: #3155d5;
        border: 1px solid transparent;
        border-radius: 5px;

        font-weight: 600;
        font-size: 18px;
        text-transform: capitalize;
        color: whitesmoke;

        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        
        &:hover,
        &:focus {
        transform: scale(1.1);
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
        }
`;