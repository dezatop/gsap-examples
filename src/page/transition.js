import {useLayoutEffect, useState} from "react";
import {Transition, TransitionGroup, CSSTransition} from "react-transition-group";
import gsap from "gsap";

const dataList = [
  {id:1, name: 'test1'},
  {id:2, name: 'tes2'},
  {id:3, name: 'tes3'},
  {id:4, name: 'tes4'},
]

const TransitionPage = () => {
  const [show, setShow] = useState(false)
  const [listData, setListData] = useState(dataList)

  useLayoutEffect(() => {

  }, [])

  return (
    <div className='wp_loader'>

      <div onClick={() => {
        setShow(!show)}
      }>
        <h1 >
          Trigger
        </h1>
      </div>
      <h1 onClick={() => setListData([{id: listData.length + 1, name: `qweqweqweqwe${listData.length}`}, ...listData])}>
        Add New List Item
      </h1>
      <TransitionGroup className="todo-list" component='div'>
        {listData.map(el => (
          <CSSTransition
            key={el.id}
            classNames="todo"
            timeout={800}
          >
            <div onClick={() => setListData([...listData.filter(target => target.id !== el.id)])} className="todo">
              {el.name}
            </div>
          </CSSTransition>
        ))}

      </TransitionGroup>
      <Transition
        in={show}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <div className={`loader ${state}`}>
            <div className='flex'>
              <p className='letter_load'>L</p>
              <p className='letter_load'>O</p>
              <p className='letter_load'>A</p>
              <p className='letter_load'>D</p>
              <p className='letter_load'>I</p>
              <p className='letter_load'>N</p>
              <p className='letter_load'>G</p>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default TransitionPage;