package main

type UserSet struct {
	data                 map[string]bool
	internalOrderedArray []string
}

func newUserSet() *UserSet {
	return &UserSet{
		data:                 make(map[string]bool),
		internalOrderedArray: make([]string, 0),
	}
}
func (s *UserSet) Add(v string) {
	s.data[v] = true
	s.internalOrderedArray = append(s.internalOrderedArray, v)
}

func (s *UserSet) Contains(v string) bool {
	return s.data[v]
}

func (s *UserSet) Size() int {
	return len(s.data)
}

func (s *UserSet) AtIndex(i int) string {
	return s.internalOrderedArray[i]
}
