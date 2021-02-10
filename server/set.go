package main

type Set struct {
	data map[string]bool
}

func newSet() *Set {
	return &Set{data: make(map[string]bool)}
}
func (s *Set) Add(v string) {
	s.data[v] = true
}

func (s *Set) Contains(v string) bool {
	return s.data[v]
}

func (s *Set) Size() int {
	return len(s.data)
}
