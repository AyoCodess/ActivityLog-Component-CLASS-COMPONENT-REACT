import React, { Component } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLog: false,
      dynamicUserList: this.props.cardInfo.users,
    };
  }

  render() {
    const title = this.props.cardInfo.title;
    const description = this.props.cardInfo.description;
    const dynamicUserList = this.state.dynamicUserList;

    let uniqueUsers = [...new Set(dynamicUserList.map((user) => user.name))];
    let summaryString = '';

    //- creates the comment summary string depending on the amount of comments and users
    if (dynamicUserList.length > 0 && dynamicUserList.length < 3) {
      summaryString = 'No other comments';
    }

    if (dynamicUserList.length >= 3) {
      summaryString = `+${dynamicUserList.slice(3).length} more comments from ${
        dynamicUserList[0].name.split(' ')[0]
      } and ${dynamicUserList[1].name.split(' ')[0]} and ${
        dynamicUserList.length - uniqueUsers.length
      } others`;
    }

    if (dynamicUserList.length < 0) {
      summaryString = '';
    }

    const showLog = () => {
      !this.state.showLog
        ? this.setState({ showLog: true })
        : this.setState({ showLog: false });
    };

    return (
      <article className='px-2'>
        <header>
          <h2 className='text-2xl font-extrabold'>{title}</h2>
        </header>
        <section>
          <p className='text-sm text-gray-400 mt-1'>{description}</p>
        </section>
        <div className='border-gray-100 border-2 py-2 px-3  mt-4 rounded-md'>
          {dynamicUserList.length > 0 ? (
            <section>
              {this.state.showLog &&
                dynamicUserList.map((user) => {
                  return (
                    <div
                      className='flex flex-col sm:flex-row gap-1 py-[0.2rem]'
                      key={user.commentId}>
                      <p className='text-sm font-black'>{user.name}:</p>
                      <p className='text-sm truncate'>{user.comment}</p>
                    </div>
                  );
                })}
              {!this.state.showLog &&
                dynamicUserList.slice(0, 3).map((user) => {
                  return (
                    <div
                      className='flex flex-col sm:flex-row gap-1 py-[0.2rem]'
                      key={user.commentId}>
                      <p className='text-sm font-black'>{user.name}:</p>
                      <p className='text-sm truncate'>{user.comment}</p>
                    </div>
                  );
                })}
            </section>
          ) : (
            <section>
              <p>No Data</p>
            </section>
          )}
          <footer className='flex justify-between mt-2 text-xs'>
            <p>
              {!this.state.showLog ? summaryString : 'Viewing all comments'}
            </p>
            {dynamicUserList.length > 3 ? (
              <button onClick={() => showLog()} className='font-bold'>
                {!this.state.showLog
                  ? 'View full activity log'
                  : 'Collapse activity log'}
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
