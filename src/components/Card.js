import React, { Component } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

export default class Card extends Component {
  state = {
    showLog: false,
    dynamicUserList: this.props.cardInfo.users,
  };

  toggleShowLog = () => {
    !this.state.showLog
      ? this.setState({ showLog: true })
      : this.setState({ showLog: false });
  };

  renderUserSections(sections) {
    return sections.map((user) => {
      return (
        <div
          className='flex flex-col sm:flex-row gap-1 py-[0.2rem]'
          key={user.commentId}>
          <p className='text-sm font-black'>{user.name}:</p>
          <p className='text-sm truncate'>{user.comment}</p>
        </div>
      );
    });
  }

  render() {
    const {
      cardInfo: { title, description },
    } = this.props;

    const { dynamicUserList, showLog } = this.state;

    let uniqueUsers = [...new Set(dynamicUserList.map((user) => user.name))];
    let summaryString = '';

    // - rendering different user sections depending on data
    let sections = <p>No Data</p>;

    if (dynamicUserList.length > 0) {
      sections = showLog
        ? this.renderUserSections(dynamicUserList)
        : this.renderUserSections(dynamicUserList.slice(0, 3));
    }

    //- creates the comment summary string depending on the amount of comments and users

    if (dynamicUserList.length > 0 && dynamicUserList.length < 3) {
      summaryString = 'No other comments';
    }

    console.log(dynamicUserList.slice(3));
    if (dynamicUserList.length > 3) {
      summaryString = `+${dynamicUserList.slice(3).length} more comments from ${
        dynamicUserList.slice(3)[0]
          ? `${dynamicUserList.slice(3)[0].name.split(' ')[0]},`
          : ','
      } ${
        dynamicUserList.slice(3)[1]
          ? ` ${dynamicUserList.slice(3)[1].name.split(' ')[0]}`
          : ''
      } ${
        dynamicUserList.length >= 6
          ? `and ${uniqueUsers.length - 3} others`
          : ''
      }`;
    }

    summaryString = !showLog ? summaryString : 'Viewing all comments';

    return (
      <article className='px-3 w-screen md:w-11/12 lg:w-2/3'>
        <header>
          <h2 className='text-2xl font-extrabold'>{title}</h2>
        </header>
        <section>
          <p className='text-sm text-gray-400 mt-1'>{description}</p>
        </section>
        <div className='border-gray-100 border-2 py-2 px-3  mt-4 rounded-md'>
          <section>{sections}</section>
          <hr className='mt-2 border md:hidden' />
          <footer className='flex flex-col md:flex-row sm:justify-between mt-2 text-xs'>
            <p>{summaryString}</p>
            {dynamicUserList.length > 3 ? (
              <button
                onClick={this.toggleShowLog}
                className='font-bold cursor-pointer w-fit mt-2 sm:mt-0'>
                {!showLog ? 'View full activity log' : 'Collapse activity log'}
                {'  '}
                <ArrowCircleRightIcon className='h-3 w-3 ml-1 inline-block' />
              </button>
            ) : null}
          </footer>
        </div>
      </article>
    );
  }
}
