import './App.css';
import logo from './img/logo.svg'
import omelette from './img/spanish-omelette-with-potatoes.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './normalize.css'
import styled from 'styled-components'
import { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { About } from './About';
import { Cooking } from './Cooking';
import { DinnerTV } from './Dinner_TV';
import { Recipe } from './Recipe';

function SearchInput({ isSearch, searchValue, setSearchValue, onBlur }) {
  return isSearch ? (
    <StyledSearchInput
      value={searchValue}
      onBlur={onBlur}
      onChange={(e) => setSearchValue(e.target.value)}
      autoFocus
    />
  ) : null;
}
function Navbar() {
  const [isSearch, setIsSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("");

  function handleSearchClick() {
    if (!searchValue) {
      setIsSearch((prev) => !prev);
    }
  }

  const handleBlur = () => {
    if (!searchValue) {
      setIsSearch(false);
    }
  };

  return (
    <StyledNav>
      <Link to='/'>
        <StyledLogo src={logo}>
        </StyledLogo>
      </Link>
      <StyledUl>
        <StyledLi>
          <SearchInput
            isSearch={isSearch}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onBlur={handleBlur}
          />
          <FontAwesomeIcon onClick={handleSearchClick} icon={faMagnifyingGlass} />
        </StyledLi>
        <StyledLi>
          <Link to='/Recipe'>
            Recipe
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to='/DinnerTV'>
            Dinner TV
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to='/Cooking'>
            Cooking School
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to='/About'>
            About
          </Link>
        </StyledLi>
        <StyledButton>Sign In</StyledButton>
      </StyledUl>
    </StyledNav>
  );
}
function HomePg() {
  return (
    <>
      <StyledContentTitle>
        Let's Get Cooking
      </StyledContentTitle>
      <StyledContentDescription>
        Explore the best recipes from around the world. <br />Make cooking enjoyable again.
      </StyledContentDescription>
      <StyledContentBtn>
        Explore Recipes
      </StyledContentBtn>
    </>
  );
}
function App() {
  return (
    <StyledBody>
      <StyledContainer>
        <Navbar />
        <StyledMain>
          <StyledMainL>
            <Routes>
              <Route path='/' element={<HomePg />} />
              <Route path='/Recipe' element={<Recipe />} />
              <Route path='/Cooking' element={<Cooking />} />
              <Route path='/About' element={<About />} />
              <Route path='/DinnerTV' element={<DinnerTV />} />
            </Routes>
          </StyledMainL>
          <StyledMainR backgroundImg={omelette}>

          </StyledMainR>
        </StyledMain>
        <></>
      </StyledContainer>
    </StyledBody>
  );
}

export default App;

const StyledBody = styled.div`
  display:flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
`

const StyledContainer = styled.div`
  height: 80vh;
  width: 75vw;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f1ffcc;
`

const StyledLogo = styled.img`
  height: 80%;
  width: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  animation: LogoRotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes LogoRotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 90%;
`
const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 50%;
`
const StyledLi = styled.li`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
const StyledSearchInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0 4px ;
&:focus{
  outline:none;
}
`
const StyledButton = styled.div`
  color:#fff;
  border:none;
  background-color: #596b2a;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    opacity: .8;
  };
`
const StyledMain = styled.div`
  height: 70%;
  width: 90%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: space-around;
  line-height: 1.5;
  `

const StyledMainL = styled.div`
    height: 60%;
    width: 40%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-self: space-around;
`

const StyledContentTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  `

const StyledContentDescription = styled(StyledContentTitle)`
  font-size: 18px;
  line-height: 1.5;
`

const StyledContentBtn = styled(StyledButton)`
  width: 40%;
  font-size: 18px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`

const StyledMainR = styled.div`
  height: 100%;
  width: 40%;
  align-self: space-around;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`