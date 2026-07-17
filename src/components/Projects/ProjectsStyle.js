import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;

    @media (max-width: 768px) {
        padding: 56px 16px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const Title = styled.h2`
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const Desc = styled.p`
    font-size: 16px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0 0 24px 0;
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;
