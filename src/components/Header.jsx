import { Box, styled, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { appleLogo, navData } from "../constants/constants"

const Component = styled(Box)({
    backgroundColor: '#f5f5f7',
    height: 44
});

const NavBar = styled(Box)({
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    '& > *': {
        color: 'rgba(0, 0, 0, 0.8)',
        fontweight: 600,
        opacity: 0.8,
        padding: '0 21px',
        fontSize: 12
    }
})

const Header = () => {
    return (
        <Component>
            <NavBar>
                <img src={appleLogo} alt="logo" style={{ width: 18 }} />
                {
                    navData.map(nav => (
                        <Typography style={{ fontSize: 12, fontWeight: 600 }}>{nav}</Typography>
                    ))
                }
                <SearchIcon fontSize="small"/>
                <ShoppingBagIcon fontSize="small"/>
            </NavBar>
        </Component>
    )
}

export default Header;