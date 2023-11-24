
import {
  Box, HStack, Text, Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const finalFocusRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const { i18n } = useTranslation();
  const changeLanguage = (language : string) => {
    i18n.changeLanguage(language);
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
            <Link to="/"> {t('navbar.about')} </Link>
          </Text>
          <Text
            borderBottom="3px solid transparent"
            _hover={{ color: 'primary', borderColor: 'primary' }}
            cursor="pointer"
            transition="0.3s"
            lineHeight="2"
            onClick={() => scrollToSection('goals')}
          >
            <Link to="/"> {t('navbar.goals')} </Link>
          </Text>
          <Text
            borderBottom="3px solid transparent"
            _hover={{ color: 'primary', borderColor: 'primary' }}
            cursor="pointer"
            transition="0.3s"
            lineHeight="2"
            onClick={() => scrollToSection('sponsors')}
          >
            <Link to="/"> {t('navbar.supporters')} </Link>
          </Text>
          <Text
            borderBottom="3px solid transparent"
            _hover={{ color: 'primary', borderColor: 'primary' }}
            cursor="pointer"
            transition="0.3s"
            lineHeight="2"
            onClick={() => scrollToSection('sponsors')}
          >
            <Link to="/statistics">{t('navbar.statistics')}</Link>
          </Text>
        </HStack>
        <Spacer />

        <HStack spacing={{ base: '8px', lg: '16px' }}>
          <Text
            as="button"
            onClick={() => changeLanguage('ar')}
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
            onClick={() => changeLanguage('en')}
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
            onClick={() => changeLanguage('es')}
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
            onClick={() => changeLanguage('fr')}
            borderBottom="3px solid transparent"
            _hover={{ color: 'primary', borderColor: 'primary' }}
            cursor="pointer"
            transition="0.3s"
            lineHeight="2"
          >
            Français
          </Text>
        </HStack>

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
          {t('navbar.logo')}
        </Text>
        <HStack
          spacing={{ base: '16px', lg: '32px' }}
          fontFamily="Readex Pro"
          fontSize={{ base: '14px', lg: '17px' }}
          fontWeight="400"
        >

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
            <HamburgerIcon />
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
            <Text m={5}> <Link to="/">{t('navbar.home')}</Link></Text>
            <Text m={5} onClick={() => scrollToSection('about')}>{t('navbar.about')}</Text>
            <Text m={5} onClick={() => scrollToSection('goals')}> {t('navbar.goals')}  </Text>
            <Text m={5} onClick={() => scrollToSection('sponsors')}>{t('navbar.supporters')}</Text>
            <Text m={5}  > <Link to="/statistics">{t('navbar.statistics')}</Link></Text>
            <HStack spacing={{ base: '8px', lg: '16px' }}>
          <Text
            as="button"
            onClick={() => changeLanguage('ar')}
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
            onClick={() => changeLanguage('en')}
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
            onClick={() => changeLanguage('es')}
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
            onClick={() => changeLanguage('fr')}
            borderBottom="3px solid transparent"
            _hover={{ color: 'primary', borderColor: 'primary' }}
            cursor="pointer"
            transition="0.3s"
            lineHeight="2"
          >
            Français
          </Text>
        </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
