import { Visibility } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
    padding: 20px;
	margin-right: 20px;
`

const Title = styled.span`
	font-size: 22px;
	font-weight: 600;
`

const WidgetList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

const WidgetListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20px 0;
`

const Avatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`

const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const UserName = styled.span`
	font-weight: 600;
`

const UserJob = styled.span`
	font-weight: 300;
`

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	border-radius: 10px;
	padding: 7px 10px;
	background-color: transparent;
	cursor: pointer;
	color: #555;
`


const WidgetSmall = () => {
	return (
		<Container className='widgetSmall'>
			<Title>Novos Membros</Title>
			<WidgetList>
				<WidgetListItem>
					<Avatar src='https://i.imgur.com/vYKiNat.png' />
					<UserWrapper>
						<UserName>John Cena</UserName>
						<UserJob>Engenheiro de Software</UserJob>
					</UserWrapper>
					<Button>
						<Visibility style={{ fontSize: '20px' }} />
					</Button>
				</WidgetListItem>
				<WidgetListItem>
					<Avatar src='https://i.imgur.com/xDpdo6t.png' />
					<UserWrapper>
						<UserName>The Rock</UserName>
						<UserJob>Engenheiro de Software</UserJob>
					</UserWrapper>
					<Button>
						<Visibility style={{ fontSize: '20px' }} />
					</Button>
				</WidgetListItem>
				<WidgetListItem>
					<Avatar src='https://i.imgur.com/yt2xYJn.png' />
					<UserWrapper>
						<UserName>Batman</UserName>
						<UserJob>Engenheiro de Software</UserJob>
					</UserWrapper>
					<Button>
						<Visibility style={{ fontSize: '20px' }} />
					</Button>
				</WidgetListItem>
				<WidgetListItem>
					<Avatar src='https://i.imgur.com/ciQf0Wc.png' />
					<UserWrapper>
						<UserName>Thor</UserName>
						<UserJob>Engenheiro de Software</UserJob>
					</UserWrapper>
					<Button>
						<Visibility style={{ fontSize: '20px' }} />
					</Button>
				</WidgetListItem>
				<WidgetListItem>
					<Avatar src='https://i.imgur.com/A5GEdgA.png' />
					<UserWrapper>
						<UserName>Smeagol</UserName>
						<UserJob>Engenheiro de Software</UserJob>
					</UserWrapper>
					<Button>
						<Visibility style={{ fontSize: '20px' }} />
					</Button>
				</WidgetListItem>
			</WidgetList>
		</Container>
	)
}

export default WidgetSmall
