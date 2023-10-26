import styled from "@emotion/styled"

export const Main = styled.main(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6rem',
}));

export const Header = styled.header(() => ({
    fontSize: 52,
    fontWeight: 1000,
}));