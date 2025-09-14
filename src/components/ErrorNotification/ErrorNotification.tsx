import classNames from 'classnames';
import React from 'react';

type Props = {
  errorMessage: string;
};

export const ErrorNotification: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: !errorMessage },
      )}
    >
      <button data-cy="HideErrorButton" type="button" className="delete" />
      {/* Unable to load todos
        <br />
        Title should not be empty
        <br />
        Unable to add a todo
        <br />
        Unable to delete a todo
        <br />
        Unable to update a todo */}
      {errorMessage}
    </div>
  );
};
