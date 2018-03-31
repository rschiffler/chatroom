// Libraries
import React from 'react';

// Styles
import styles from './Tabs.scss';

export default class Tabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.activeTab
		}
	}

	handleClick = (tabId, event) => {
		this.setState({ activeTab: tabId });
	}

    render() {
		return(
            <div className="Tabs">
                <div className="Tabs__toggle">
					{this.props.tabs && this.props.tabs.map((tab, index) => {
                    	return(
							<button className={"Tabs__button" + (tab.id === this.state.activeTab ? " active" : "")} key={'button-' + index} onClick={this.handleClick.bind(this, tab.id)}>{tab.title}</button>
						)
					})}
                </div>
				{this.props.tabs && this.props.tabs.map((tab, index) => {
					return(
						<div className={"Tabs__content" + (tab.id === this.state.activeTab ? " active" : "")}  key={'content-' + index}>
							{tab.content}
						</div>
					)
				})}
            </div>
        )
	}
}