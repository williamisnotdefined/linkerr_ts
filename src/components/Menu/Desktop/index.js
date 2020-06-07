import React from 'react'
import { useTranslation } from 'react-i18next'

import useAuthenticated from '@services/hooks/useAuthenticated'

import { Container, DragonLogo, List, ListItem, Anchor } from '../styles'

import dragonLogo from '@images/dragon.gif'

const MenuDesktop = () => {
    const isAuthenticated = useAuthenticated()
    const { t } = useTranslation()

    return (
        <Container>
            <DragonLogo src={dragonLogo} />
            <List>
                <ListItem>
                    <Anchor exact to="/">
                        {t('pages')}
                    </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor to="/new">Create Dragon</Anchor>
                </ListItem>
                {isAuthenticated && (
                    <ListItem>
                        <Anchor to="/logout">Logout</Anchor>
                    </ListItem>
                )}
            </List>
        </Container>
    )
}

export default MenuDesktop
