import { useState, useEffect } from "react";

const usePagination = (getLimit = 10) => {
	const [limit, setLimit] = useState(getLimit);
	const [skip, setSkip] = useState(0);
	const [end, setEnd] = useState(0);

	useEffect(() => {
		setEnd(skip + limit);
	}, [limit, skip]);

	return { limit, setLimit, skip, setSkip, end, setEnd };
};

export default usePagination;
