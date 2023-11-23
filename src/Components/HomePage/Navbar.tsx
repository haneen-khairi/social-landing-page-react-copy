
import { Box, HStack, Text, Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
 
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalFocusRef = useRef<HTMLDivElement | null>(null); // Change HTMLDivElement to the type of your finalFocusRef element

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const changeLanguage = (language) => {
    console.log(`Language changed to ${language}`);
  };

  return (
<>

    <HStack
      p={{ base: '12px 20px', lg: '24px 40px' }}
      borderBottom="1px solid #0000001F"
      spacing={{ base: '12px', lg: '24px' }}
      flexWrap="wrap"
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      className='desktop-menu'
    >
      <Text
        as={Link}
        to="/"
        fontSize={{ base: '24px', lg: '30px' }}
        fontFamily="Alexandria"
        fontWeight="600"
      >
        البوصلة
      </Text>
      <HStack
        spacing={{ base: '16px', lg: '32px' }}
        fontFamily="Readex Pro"
        fontSize={{ base: '14px', lg: '17px' }}
        fontWeight="400"
      >
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection('about')}
        >
          <Link to="/">عن الإستطلاع</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection('goals')}
        >
          <Link to="/">أهداف الإستطلاع</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection('sponsors')}
        >
          <Link to="/">الداعمون الإعلاميون</Link>
        </Text>
        <Text
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
          onClick={() => scrollToSection('sponsors')}
        >
          <Link to="/statistics">الإحصائيات</Link>
        </Text>
      </HStack>
      <Spacer />

      {/* Multi Language Setup */}
      <HStack spacing={{ base: '8px', lg: '16px' }}>
        <Text
          as="button"
          onClick={() => changeLanguage('arabic')}
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          العربية
        </Text>
        <Text
          as="button"
          onClick={() => changeLanguage('english')}
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          English
        </Text>
        <Text
          as="button"
          onClick={() => changeLanguage('spanish')}
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          Español
        </Text>
        <Text
          as="button"
          onClick={() => changeLanguage('french')}
          borderBottom="3px solid transparent"
          _hover={{ color: 'primary', borderColor: 'primary' }}
          cursor="pointer"
          transition="0.3s"
          lineHeight="2"
        >
          Français
        </Text>
      </HStack>
      {/* Multi Language Setup */}
    </HStack>
    <HStack
    className='mobile-menu'
    p={{ base: '12px 20px', lg: '24px 40px' }}
    borderBottom="1px solid #0000001F"
    spacing={{ base: '12px', lg: '24px' }}
    flexWrap="wrap"
    justifyContent={{ base: 'center', lg: 'flex-start' }}
  >
    <Text
      as={Link}
      to="/"
      fontSize={{ base: '24px', lg: '30px' }}
      fontFamily="Alexandria"
      fontWeight="600"
    >
      البوصلة
    </Text>
    <HStack
      spacing={{ base: '16px', lg: '32px' }}
      fontFamily="Readex Pro"
      fontSize={{ base: '14px', lg: '17px' }}
      fontWeight="400"
    >
      {/* ... (unchanged) */}
    </HStack>
    <Box display={{ base: 'block', lg: 'none' }}>
      <Text
        as="button"
        onClick={onOpen}
        borderBottom="3px solid transparent"
        _hover={{ color: 'primary', borderColor: 'primary' }}
        cursor="pointer"
        transition="0.3s"
        lineHeight="2"
      >
        Menu
      </Text>
    </Box>
  </HStack>

  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={finalFocusRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
        <Text onClick={() => scrollToSection('about')}>عن الإستطلاع</Text>
        <Text onClick={() => scrollToSection('goals')}>أهداف الإستطلاع</Text>
        <Text onClick={() => scrollToSection('sponsors')}>الداعمون الإعلاميون</Text>
        <Text onClick={() => scrollToSection('statistics')}>الإحصائيات</Text>
      </DrawerBody>
    </DrawerContent>
  </Drawer> 
</>
  );
};

export default Navbar;
