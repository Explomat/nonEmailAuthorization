const React = require('react');
const TextView = require('../../text-label').TextView;
const InputMoment = require('../../input-moment');
const cx = require('classnames');
const clickOutSide = require('react-onclickoutside');

const moment  = require('moment');
moment.locale('ru');

require('./style/input-calendar.scss');

module.exports = React.createClass({
	displayName: 'InputCalendar',

	mixins: [ clickOutSide ],

	propTypes: {
		className: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		date: React.PropTypes.object,
		onChange: React.PropTypes.func,
		onSave: React.PropTypes.func,
		prevMonthIcon: React.PropTypes.string,
		nextMonthIcon: React.PropTypes.string
	},

	getInitialState(){
		return {
			isShow: false
		};
	},

	handleToogle(){
		this.setState({ isShow: !this.state.isShow });
	},

	handleClickOutside() {
		this.setState({ isShow: false });
	},

	handleSave(_moment){
		this.handleToogle();
		if (this.props.onSave){
			this.props.onSave(_moment.format());
		}
	},

	render() {
		return (
			<div className={cx('input-calendar', this.props.className)}>
				<TextView
					onClick={this.handleToogle}
					inputClassName='input-calendar__date'
					value={moment(this.props.date).format('llll')}
					placeholder={this.props.placeholder}
					readOnly
				/>
				<i className='icon-calendar input-calendar__icon' onClick={this.handleToogle} />
				<div className={cx({ 'input-calendar__calendar': true, 'input-calendar__calendar--show': this.state.isShow })}>
					<InputMoment
						moment={moment(this.props.date)}
						onChange={this.props.onChange}
						onSave={this.handleSave}
						prevMonthIcon={this.props.prevMonthIcon}
						nextMonthIcon={this.props.nextMonthIcon}
					/>
				</div>
			</div>
		);
	}
});
