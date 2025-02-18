import React, { Component } from 'react';
import { Button, Checkbox, Dropdown, Toggle, Slider, RadioButton, RadioButtonGroup, OverflowMenu, OverflowMenuItem, Tabs, Tab } from 'carbon-components-react';
import Draggable from 'react-draggable';

export class Carbon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }

    updateContent = () => {
        this.setState({
            content: 'Carbon Button Clicked'
        });
    }

    render() {
        return (
            <div>
                <h1>Carbon components</h1>
                <Button onClick={this.updateContent}>Carbon</Button>
                <Draggable>
                    <Button>Draggable Button</Button>
                </Draggable>
                <p>{this.state.content}</p>
                <Checkbox id='1' labelText='hello' />
                <Dropdown id='Dropdown' label='Item List' items={['item1', 'item2']}/>
                <Toggle defaultToggled id='Toggle' onChange={console.log('changed')}/>
                <Slider value={50} min={0} max={100} />
                <RadioButtonGroup
                    defaultSelected="default-selected"
                    legend="Group Legend"
                    name="radio-button-group"
                    valueSelected="default-selected"
                >
                    <RadioButton
                        value="standard"
                        id="radio-1"
                        className="some-class"
                        disabled={false}
                        labelText="Radio button label"
                    />
                    <RadioButton
                        value="default-selected"
                        id="radio-2"
                        className="some-class"
                        disabled={false}
                        labelText="Radio button label"
                    />
                </RadioButtonGroup>
                <OverflowMenu
                    direction='bottom'
                    ariaLabel='Setting options'
                >
                    <OverflowMenuItem
                        itemText='item1'
                        aria-label='select for item1'
                    />
                    <OverflowMenuItem
                        itemText='item2'
                        aria-label='select for item2'
                    />
                </OverflowMenu>
                <Tabs
                className="some-class"
                tabContentClassName="tab-content"
                >
                    <Tab
                    label="Tab label 1"
                    aria-label='about this'
                    />
                    <Tab
                    label="Tab label 2"
                    arua-label='not about this'
                    />
                </Tabs>
            </div>
        )
    }
}

export default Carbon
